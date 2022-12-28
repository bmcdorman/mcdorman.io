import * as React from 'react';
import { connect } from 'react-redux';
import { styled } from 'styletron-react';
import ResumeModel from '../model/Resume';
import RoleModel from '../model/Role';
import OrganizationModel from '../model/Organization';
import { descending } from '../model/sort';
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

const Container = styled('div', {
  fontSize: '0.9rem'
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
  marginTop: '1em',
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
  marginTop: '1em',
});

const RoleInfo = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontWeight: 'bold',
});

const RoleName = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: 0,
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



const Role = ({ role, organization }: { role: RoleModel; organization?: OrganizationModel }) => {
  const {
    name,
    startDate,
    endDate,
    description,
    location,
  } = role;
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
      {description && <Markdown>{description}</Markdown>}
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
      {description && <Markdown>{description}</Markdown>}
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

const Footer = styled('div', {
  marginTop: '1em',
  borderTop: '1px solid #ccc',
  paddingTop: '1em',
  fontSize: '0.8rem',
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

  const educationModels: EducationModel[] = Object.values(education);
  educationModels.sort(descending);

  return (
    <Container>
      <Name>Braden McDorman</Name>
      <Bar>
        <ContactComponent>Los Angeles, CA</ContactComponent>
        <ContactComponent>(405) 795-1800</ContactComponent>
        <ContactComponent>braden@mcdorman.io</ContactComponent>
      </Bar>
      <NoteBox>
        An interactive version of this resume with notable projects, additional roles, and expanded role details is available at <a href='https://mcdorman.io/resume'>mcdorman.io/resume</a>.
      </NoteBox>
      
      <Section title="Summary">
        <Markdown>{resume.about}</Markdown>
      </Section>

      <Section title="Experience">
        {roleModels.map(role => (
          <Role
            key={role.id}
            role={role}
            organization={role.organizationRef ? organizations[role.organizationRef.id] : undefined}
          />
        ))}
      </Section>

      <Section title="Education">
        {educationModels.map(edu => (
          <Education
            key={edu.id}
            education={edu}
            organization={edu.organizationRef ? organizations[edu.organizationRef.id] : undefined}
          />
        ))}
      </Section>
      <Footer>
        Generated on {new Date().toLocaleDateString()} from <a href='https://mcdorman.io/resume'>mcdorman.io/resume</a>
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