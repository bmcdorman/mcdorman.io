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

// @ts-ignore
import ProgrammingLanguage from '../model/ProgrammingLanguage';

// @ts-ignore
import gitInfo from 'git-info';

const Paragraph = styled('p', {
  marginTop: '0.2em',
  marginBottom: '0.9em',
});

const ParagraphRenderer = (props: { children: React.ReactNode }) => {
  return <Paragraph>{props.children}</Paragraph>;
};

const Container = styled('div', {
  fontSize: '0.8rem'
});

const Name = styled('h1', {
  margin: 0,
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
  ':last-child': {
    paddingRight: '0',
    borderRight: 'none',
  }
});

const SectionContainer = styled('div', {
  marginTop: '0.5em',
});

const SectionName = styled('h2', {
  margin: 0,
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
  marginTop: '0.5em',
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

const SkillsSubsectionContainer = styled('div', {
  marginTop: '0.5em',
});

const SkillSubsectionTitle = styled('div', {
  fontWeight: 'bold',
});

const SkillTypeContainer = styled('div', {
  marginLeft: '1em',
});

const SkillTypeName = styled('span', {
  fontWeight: 'bold',
});

const SkillContainer = styled('span', {
  paddingLeft: '0.5em',
  paddingRight: '0.5em',
  borderRight: '1px solid #ccc',
  ':last-child': {
    borderRight: 'none',
  }
});

const SkillsSubsection = ({ skills, title }: { skills: Skill[]; title: string; }) => {
  const programmingLanguages = skills.filter(skill => skill.type === Skill.Type.ProgrammingLanguage) as Skill.ProgrammingLanguage[];
  const libraries = skills.filter(skill => skill.type === Skill.Type.Library) as Skill.Library[];
  const platforms = skills.filter(skill => skill.type === Skill.Type.Platform) as Skill.Platform[];
  const tools = skills.filter(skill => skill.type === Skill.Type.Tool) as Skill.Tool[];
  const techniques = skills.filter(skill => skill.type === Skill.Type.Technique) as Skill.Technique[];
  
  return (
    <SkillsSubsectionContainer>
      <SkillSubsectionTitle>{title}</SkillSubsectionTitle>
      {programmingLanguages.length > 0 && <SkillTypeContainer>
        <SkillTypeName>Programming Languages</SkillTypeName>
        {programmingLanguages.map((skill, i) => <SkillContainer key={i}>{ProgrammingLanguage.name(skill.programmingLanguage)}</SkillContainer>)}
      </SkillTypeContainer>}
      {libraries.length > 0 && <SkillTypeContainer>
        <SkillTypeName>Libraries</SkillTypeName>
        {libraries.map((skill, i) => <SkillContainer key={i}>{skill.library}</SkillContainer>)}
      </SkillTypeContainer>}
      {platforms.length > 0 && <SkillTypeContainer>
        <SkillTypeName>Platforms</SkillTypeName>
        {platforms.map((skill, i) => <SkillContainer key={i}>{skill.platform}</SkillContainer>)}
      </SkillTypeContainer>}
      {tools.length > 0 && <SkillTypeContainer>
        <SkillTypeName>Tools</SkillTypeName>
        {tools.map((skill, i) => <SkillContainer key={i}>{skill.tool}</SkillContainer>)}
      </SkillTypeContainer>}
      {techniques.length > 0 && <SkillTypeContainer>
        <SkillTypeName>Techniques</SkillTypeName>
        {techniques.map((skill, i) => <SkillContainer key={i}>{skill.technique}</SkillContainer>)}
      </SkillTypeContainer>}
    </SkillsSubsectionContainer>
  );
};

const Footer = styled('div', {
  marginTop: '1em',
  borderTop: '1px solid #ccc',
  paddingTop: '1em',
  fontSize: '0.8rem',
  textAlign: 'center',
});

const NoteBox = styled('div', {
  border: '1px solid #000',
  padding: '0.5em',
  marginTop: '1em',
  fontWeight: 'bold',
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

  const employeeRoleModels = roleModelsWithShorthands.filter(([role, _]) => role.kind === 'employee');
  const advisorRoleModels = roleModelsWithShorthands.filter(([role, _]) => role.kind === 'advisor');
  
  const educationModels: EducationModel[] = Object.values(education);
  educationModels.sort(descending);

  return (
    <Container>
      <Name>Braden McDorman</Name>
      <Bar>
        <ContactComponent>Ponte Vedra, FL</ContactComponent>
        <ContactComponent>(405) 795-1800</ContactComponent>
        <ContactComponent>braden@mcdorman.io</ContactComponent>
      </Bar>
      <NoteBox>
        An interactive version of this resume with notable projects, additional roles, and expanded role details is available at <a href='https://mcdorman.io/resume'>mcdorman.io/resume</a>.
      </NoteBox>
      
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
        <SkillsSubsection title='Over 10 years' skills={resume.skills.expert} />
        <SkillsSubsection title='Over 5 years' skills={resume.skills.proficient} />
        <SkillsSubsection title='Over 2 years' skills={resume.skills.familiar} />
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