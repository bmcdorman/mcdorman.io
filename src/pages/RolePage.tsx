import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import RoleModel from '../model/Role';
import ProjectModel from '../model/Project';

import { styled } from 'styletron-react';
import { connect } from 'react-redux';
import State from '../State';
import Role from '../ui/Role';
import Section from '../ui/Section';
import Project from '../ui/Project';
import { push } from 'connected-react-router';
import OrganizationModel from '../model/Organization';
import OrganizationRef from '../model/OrganizationRef';

export interface RolePageParams {
  id: string;
}

export interface RolePagePublicProps extends RouteComponentProps<RolePageParams> {
}

interface RolePagePrivateProps {
  role: RoleModel;
  organization?: OrganizationModel;
  projects: ProjectModel[];

  onProjectClick: (id: string) => void;
}

type Props = RolePagePublicProps & RolePagePrivateProps;

const Container = styled('div', {
  padding: '1rem',
  borderRadius: '0.5rem',
  border: '1px solid #ccc',
  backgroundColor: 'rgb(255, 255, 255)',
});

class RolePage extends React.Component<Props> {
  private onProjectClick_ = (id: string) => (event: React.MouseEvent) => {
    this.props.onProjectClick(id);
  };

  render() {
    const { props } = this;
    const { role, projects, organization } = props;

    return (
      <Container>
        <Section title='Role'>
          <Role role={role} />
        </Section>
        <Section title={`Projects while ${role.name}${organization ? ` at ${OrganizationModel.name(organization)}` : ''}`}>
          {projects.map((project) => (
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

export default connect((state: State, { match: { params: { id } } }: RolePagePublicProps) => {
  const role = state.roles[id];
  return {
    role,
    company: role.organizationRef !== undefined
      ? OrganizationRef.resolve(role.organizationRef, state)
      : undefined,
    projects: Object.values(state.projects)
      .filter(project => project.roleIds && project.roleIds.findIndex(i => i === id) !== -1)
  };
}, dispatch => ({
  onProjectClick: (id: string) => dispatch(push(`/project/${id}`)),
}))(RolePage) as React.ComponentType<RolePagePublicProps>;