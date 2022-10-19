import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { styled } from 'styletron-react';
import ProjectModel from '../model/Project';
import State from '../State';
import Project from '../ui/Project';
import Section from '../ui/Section';
import { PageContainer } from './common';

export interface ProjectPageParams {
  id: string;
}

export interface ProjectPagePublicProps extends RouteComponentProps<ProjectPageParams> {
}

interface ProjectPagePrivateProps {
  project: ProjectModel;
}

type Props = ProjectPagePublicProps & ProjectPagePrivateProps;

class ProjectPage extends React.Component<Props> {
  render() {
    const { props } = this;
    const { project } = props;

    return (
      <PageContainer>
        <Section title='Project'>
          <Project project={project} />
        </Section>
      </PageContainer>
    );
  }
}

export default connect((state: State, ownProps: ProjectPagePublicProps) => ({
  project: state.projects[ownProps.match.params.id],
}))(ProjectPage) as React.ComponentType<ProjectPagePublicProps>;