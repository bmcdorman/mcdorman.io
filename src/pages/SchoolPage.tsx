import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { styled } from 'styletron-react';

import SchoolModel from '../model/School';
import RoleModel from '../model/Role';
import ProjectModel from '../model/Project';
import State from '../State';
import School from '../ui/School';
import Project from '../ui/Project';
import Role from '../ui/Role';
import Section from '../ui/Section';
import { push } from 'connected-react-router';
import { descending } from '../model/sort';

const Container = styled('div', {
  padding: '1rem',
});


class SchoolPage extends React.Component<SchoolPage.Props> {
  private onProjectClick_ = (id: string) => (event: React.MouseEvent) => {
    this.props.onProjectClick(id);
  };

  private onRoleClick_ = (id: string) => (event: React.MouseEvent) => {
    this.props.onRoleClick(id);
  };

  render() {
    const { props } = this;
    const { school, roles, projects } = props;

    return (
      <Container>
        <Section title='School'>
          <School school={school} />
        </Section>
        <Section title={`Roles at ${school.name}`}>
          {roles.map((role) => (
            <Role
              key={role.id}
              role={role}
              hideOrganization
              onClick={this.onRoleClick_(role.id)}
            />
          ))}
        </Section>
        <Section title={`Projects at ${school.name}`}>
          {projects.map(project => (
            <Project
              key={project.id}
              project={project}
              onClick={this.onProjectClick_(project.id)}
            />
          ))}
        </Section>
      </Container>
    );
  }
}

namespace SchoolPage {
  export interface Params {
    id: string;
  }
  
  export interface PublicProps extends RouteComponentProps<Params> {
  }
  
  export interface PrivateProps {
    school: SchoolModel;
    roles: RoleModel[];
    projects: ProjectModel[];

    onProjectClick: (id: string) => void;
    onRoleClick: (id: string) => void;
  }
  
  export type Props = PublicProps & PrivateProps;
}

export default connect((state: State, { match: { params: { id } } }: SchoolPage.PublicProps) => {
  
  return {
    school: state.companies[id],
    roles: Object.values(state.roles)
      .filter(role => role.organizationRef && role.organizationRef.id === id)
      .sort(descending),
    projects: Object.values(state.projects)
      .filter(project => (
        project.roleIds &&
        project.roleIds.some(roleId => (
          state.roles[roleId].organizationRef &&
          state.roles[roleId].organizationRef!.id === id
        ))
      ))
  };
}, dispatch => ({
  onProjectClick: (id: string) => dispatch(push(`/project/${id}`)),
  onRoleClick: (id: string) => dispatch(push(`/role/${id}`)),
}))(SchoolPage) as React.ComponentType<SchoolPage.PublicProps>;