import * as React from 'react';
import { connect } from 'react-redux';
import { styled } from 'styletron-react';
import ResumeModel from '../model/Resume';
import RoleModel from '../model/Role';
import OrganizationModel from '../model/Organization';
import { descending, descendingAscending } from '../model/sort';
import State from '../State';
import EducationModel from '../model/Education';
import { FlexSpacer } from '../style';
import { toCompactHumanMonthYear, toHumanMonthYear } from '../util/date';
import CompanyModel from '../model/Company';
import SchoolModel from '../model/School';
import Dict from '../util/Dict';
import SetOps from '../util/SetOps';
import OrganizationRef from '../model/OrganizationRef';
import Markdown from '../ui/Markdown';
import Location from '../model/Location';
import Skill from '../model/Skill';
import Contact from '../model/Contact';

// @ts-ignore
import gitInfo from 'git-info';

const Paragraph = styled('p', {
  marginTop: '0',
  marginBottom: '0.9em',
});

const ParagraphRenderer = (props: { children: React.ReactNode }) => {
  return <Paragraph>{props.children}</Paragraph>;
};

const renderContactInline = (contact: Contact): React.ReactNode => {
  switch (contact.type) {
    case Contact.Type.Email:
      return <a href={`mailto:${contact.email}`}>{contact.email}</a>;
    case Contact.Type.Phone:
      return contact.phone;
    case Contact.Type.LinkedIn:
      return <a href={`https://www.linkedin.com/in/${contact.username}/`}>linkedin.com/in/{contact.username}</a>;
    case Contact.Type.GitHub:
      return <a href={`https://github.com/${contact.username}`}>github.com/{contact.username}</a>;
  }
};

const Container = styled('div', {
  fontSize: '0.78rem',
  lineHeight: '1.38',
});

const Name = styled('h1', {
  margin: 0,
});

const HeaderLocation = styled('div', {
  fontSize: '0.85rem',
  color: '#444',
  marginBottom: '0.2em',
});

const Bar = styled('div', {
  display: 'flex',
  flexDirection: 'row',
});

const ContactComponent = styled('div', {
  ':first-child': {
    paddingLeft: '0',
  },
  paddingLeft: '1em',
  paddingRight: '1em',
  borderRight: '1px solid #ccc',
  whiteSpace: 'nowrap',
  ':last-child': {
    paddingRight: '0',
    borderRight: 'none',
  }
});

const SectionContainer = styled('div', {
  marginTop: '0.8em',
});

const SectionName = styled('h2', {
  margin: 0,
  marginBottom: '0.3em',
  width: '100%',
  borderBottom: '1px solid #000',
});

const Section = (props: { title: string, children: React.ReactNode }) => {
  return (
    <SectionContainer>
      <SectionName>{props.title}</SectionName>
      {props.children}
    </SectionContainer>
  );
};

const RoleContainer = styled('div', {
  marginTop: '0.8em',
});

const RoleInfo = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontWeight: 'bold',
});

const Dates = styled('span', {
  overflow: 'hidden',
});

const CenteredLine = styled('div', {
  flex: '1 1',
  borderBottom: '1px solid #ccc',
  marginLeft: '0.5em',
  marginRight: '0.5em',
});

const Separator = styled('span', {
  width: '0.5em',
  borderBottom: '0.1em solid #000',
  marginLeft: '0.5em',
  marginRight: '0.5em',
});

enum ShorthandMode {
  Long,
  LongShort,
  Short,
}

namespace ShorthandMode {
  export const organizationName = (mode: ShorthandMode, organization: OrganizationModel): string => {
    switch (mode) {
      case ShorthandMode.Long: return OrganizationModel.name(organization);
      case ShorthandMode.LongShort: return `${OrganizationModel.name(organization)} (${OrganizationModel.shorthand(organization)})`;
      case ShorthandMode.Short: return OrganizationModel.shorthand(organization);
    }
  }
}


const Role = ({ role, organization, shorthandMode }: { role: RoleModel; organization?: OrganizationModel; shorthandMode?: ShorthandMode; }) => {
  const {
    name,
    startDate,
    endDate,
    location,
    hideStatic
  } = role;

  const description = role.shortDescription || role.description;

  return (
    <RoleContainer>
      <RoleInfo>
        {organization ? <>
          {ShorthandMode.organizationName(shorthandMode || ShorthandMode.Long, organization)}
          <Separator />
        </> : undefined}
        {name}
        {location ? <>
          <Separator />
          {location.type === Location.Type.Remote ? 'Remote' : location.location}
        </> : undefined}
        <CenteredLine />
        <Dates>
          {toCompactHumanMonthYear(new Date(startDate))} to {endDate ? toCompactHumanMonthYear(new Date(endDate)) : 'Present'}
        </Dates>
      </RoleInfo>
      {description && !hideStatic && <Markdown components={{ p: ParagraphRenderer }}>{description}</Markdown>}
    </RoleContainer>
  );
};

const Education = ({ education, organization }: { education: EducationModel; organization?: OrganizationModel }) => {
  const {
    name,
    startDate,
    endDate,
    description,
    location,
    organizationRef
  } = education;
  return (
    <RoleContainer>
      <RoleInfo>
        {organization ? <>
          {OrganizationModel.name(organization)}
          <Separator />
        </> : undefined}
        {name}
        <CenteredLine />
        <Dates>
          {toCompactHumanMonthYear(new Date(startDate))} to {endDate ? toCompactHumanMonthYear(new Date(endDate)) : 'Present'}
        </Dates>
      </RoleInfo>
      {description && <Markdown components={{ p: ParagraphRenderer }}>{description}</Markdown>}
    </RoleContainer>
  );
};

const LinkTitle = styled('span', {
  marginRight: '0.5em',
  fontWeight: 'bold',
});

const Link = ({ title, href }: { title: string, href: string; }) => {
  return (
    <div>
      <LinkTitle>{title}</LinkTitle>
      <a href={href}>{href}</a>
    </div>
  );
};

const SkillGroupContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'baseline',
  flexWrap: 'wrap',
  marginTop: '0.4em',
});

const SkillGroupTitle = styled('span', {
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
  marginRight: '0.6em',
});

const SkillItem = styled('span', {
  paddingLeft: '0.5em',
  paddingRight: '0.5em',
  borderRight: '1px solid #ccc',
  whiteSpace: 'nowrap',
  ':last-child': {
    borderRight: 'none',
  },
});

const CompactRoleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: '0.1em',
  fontSize: '0.88em',
  color: '#333',
});

const CompactRoleDot = styled('span', {
  marginLeft: '0.4em',
  marginRight: '0.4em',
  color: '#999',
});

const EarlierExperienceHeading = styled('div', {
  fontStyle: 'italic',
  marginTop: '0.7em',
  marginBottom: '0.15em',
  borderBottom: '1px solid #ccc',
  fontSize: '0.85em',
  color: '#444',
});

const CompactRole = ({ role, organization }: { role: RoleModel; organization?: OrganizationModel }) => {
  const { name, startDate, endDate, location } = role;
  const parts: string[] = [];
  if (organization) parts.push(OrganizationModel.shorthand(organization));
  parts.push(name);
  if (location) {
    parts.push(location.type === Location.Type.Remote ? 'Remote' : location.location);
  }
  const dateStr = `${toCompactHumanMonthYear(new Date(startDate))} to ${endDate ? toCompactHumanMonthYear(new Date(endDate)) : 'Present'}`;

  return (
    <CompactRoleContainer>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {i > 0 && <CompactRoleDot>·</CompactRoleDot>}
          <span>{part}</span>
        </React.Fragment>
      ))}
      <CenteredLine />
      <Dates>{dateStr}</Dates>
    </CompactRoleContainer>
  );
};

const SkillGroup = ({ title, skills }: { title: string; skills: Skill[] }) => (
  <SkillGroupContainer>
    <SkillGroupTitle>{title}</SkillGroupTitle>
    {skills.map((skill, i) => (
      <SkillItem key={i}>{Skill.name(skill)}</SkillItem>
    ))}
  </SkillGroupContainer>
);

const Footer = styled('div', {
  marginTop: '0.5em',
  borderTop: '1px solid #ccc',
  paddingTop: '0.5em',
  fontSize: '0.6rem',
  textAlign: 'center',
});

interface StaticResumeProps {
  resume: ResumeModel;
  roles: { [id: string]: RoleModel; };
  education: { [id: string]: EducationModel; };
  organizations: { [id: string]: OrganizationModel; };
}

export const StaticResume = ({ resume, roles, education, organizations }: StaticResumeProps) => {
  const roleModels: RoleModel[] = resume.roleIds.map(id => roles[id]);
  roleModels.sort(descending);

  const orgReferences: Dict<number> = {};
  for (const role of roleModels) {
    if (!role.organizationRef) continue;
    orgReferences[role.organizationRef.id] = (orgReferences[role.organizationRef.id] || 0) + 1;
  }
  
  const seen = new Set<string>();
  const roleModelsWithShorthands: [RoleModel, ShorthandMode][] = [];
  for (const role of roleModels) {
    if (!role.organizationRef) {
      roleModelsWithShorthands.push([role, ShorthandMode.Long]);
      continue;
    }

    if (seen.has(role.organizationRef.id)) {
      roleModelsWithShorthands.push([role, ShorthandMode.Short]);
      continue;
    }

    seen.add(role.organizationRef.id);
    const organization = organizations[role.organizationRef.id];
    roleModelsWithShorthands.push([
      role,
      orgReferences[role.organizationRef.id] > 1 && OrganizationModel.shorthand(organization) !== OrganizationModel.name(organization)
        ? ShorthandMode.LongShort
        : ShorthandMode.Long
      ]);
  }

  const employeeRoleModels = roleModelsWithShorthands.filter(([role, _]) => role.kind === 'employee' && !role.staticCompact);
  const compactRoleModels = roleModelsWithShorthands.filter(([role, _]) => role.kind === 'employee' && role.staticCompact);
  const advisorRoleModels = roleModelsWithShorthands.filter(([role, _]) => role.kind === 'advisor' && !role.hideStatic);
  
  const educationModels: EducationModel[] = Object.values(education);
  educationModels.sort(descending);

  return (
    <Container>
      <Name>Braden McDorman</Name>
      <HeaderLocation>San Francisco Bay Area</HeaderLocation>
      <Bar>
        {resume.contacts.map((contact, i) => (
          <ContactComponent key={i}>{renderContactInline(contact)}</ContactComponent>
        ))}
      </Bar>

      <Section title="Summary">
        <Markdown components={{ p: ParagraphRenderer }}>{resume.about}</Markdown>
      </Section>

      <Section title="Experience">
        {employeeRoleModels.map(([role, shorthandMode]) => (
          <Role
            key={role.id}
            role={role}
            organization={role.organizationRef ? organizations[role.organizationRef.id] : undefined}
            shorthandMode={shorthandMode}
          />
        ))}
        {compactRoleModels.length > 0 && <>
          <EarlierExperienceHeading>Earlier Experience</EarlierExperienceHeading>
          {compactRoleModels.map(([role]) => (
            <CompactRole
              key={role.id}
              role={role}
              organization={role.organizationRef ? organizations[role.organizationRef.id] : undefined}
            />
          ))}
        </>}
      </Section>

      <Section title="Advisory Experience">
        {advisorRoleModels.map(([role, shorthandMode]) => (
          <Role
            key={role.id}
            role={role}
            organization={role.organizationRef ? organizations[role.organizationRef.id] : undefined}
            shorthandMode={shorthandMode}
          />
        ))}
      </Section>

      <Section title="Education">
        {educationModels.map(edu => (
          <Education
            key={edu.id}
            education={edu}
            organization={edu.organizationRef
              ? organizations[edu.organizationRef.id]
              : undefined
            }
          />
        ))}
      </Section>
      <Section title="Skills">
        {resume.skillGroups.map((group, i) => (
          <SkillGroup key={i} title={group.title} skills={group.skills} />
        ))}
      </Section>
      <Footer>
        Generated on {new Date().toLocaleDateString()} from <a href='https://mcdorman.io/resume'>mcdorman.io/resume</a> (commit {gitInfo.commitHash}).
      </Footer>
    </Container>
  )
};

export default connect((state: State) => ({
  resume: state.resume,
  roles: state.roles,
  education: state.education,
  organizations: Dict.map(
    // Extract all organizationRefs and relabel to the organization id
    Dict.relabel(
      Dict.union(
        Dict.filterMap(state.roles, role => role.organizationRef),
        Dict.filterMap(state.education, edu => edu.organizationRef),
      ),
      organizationRef => organizationRef.id,
    ),
    // Resolve them
    organizationRef => OrganizationRef.resolve(organizationRef, state)
  ),
}))(StaticResume);