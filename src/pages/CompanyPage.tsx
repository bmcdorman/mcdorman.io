import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { styled } from 'styletron-react';

import CompanyModel from '../model/Company';
import RoleModel from '../model/Role';
import ProjectModel from '../model/Project';
import State from '../State';
import Company from '../ui/Company';
import Project from '../ui/Project';
import Role from '../ui/Role';
import Section from '../ui/Section';
import { push } from 'connected-react-router';

const Container = styled('div', {
  padding: '1rem',
});


class CompanyPage extends React.Component<CompanyPage.Props> {
  private onProjectClick_ = (id: string) => (event: React.MouseEvent) => {
    this.props.onProjectClick(id);
  };

  private onRoleClick_ = (id: string) => (event: React.MouseEvent) => {
    this.props.onRoleClick(id);
  };

  render() {
    const { props } = this;
    const { company, roles, projects } = props;

    return (
      <Container>
        <Section title='Company'>
          <Company company={company} />
        </Section>
        <Section title={`Roles at ${company.name}`}>
          {roles.map((role) => (
            <Role
              key={role.id}
              role={role}
              hideOrganization
              onClick={this.onRoleClick_(role.id)}
            />
          ))}
        </Section>
        <Section title={`Projects at ${company.name}`}>
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

namespace CompanyPage {
  export interface Params {
    id: string;
  }
  
  export interface PublicProps extends RouteComponentProps<Params> {
  }
  
  export interface PrivateProps {
    company: CompanyModel;
    roles: RoleModel[];
    projects: ProjectModel[];

    onProjectClick: (id: string) => void;
    onRoleClick: (id: string) => void;
  }
  
  export type Props = PublicProps & PrivateProps;
}

export default connect((state: State, { match: { params: { id } } }: CompanyPage.PublicProps) => {
  
  return {
    company: state.companies[id],
    roles: Object.values(state.roles)
      .filter(role => role.organizationRef && role.organizationRef.id === id)
      .sort(RoleModel.descending),
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
}))(CompanyPage) as React.ComponentType<CompanyPage.PublicProps>;