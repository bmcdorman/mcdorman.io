import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { styled } from 'styletron-react';
import ProjectModel from '../model/Project';
import State from '../State';
import Project from '../ui/Project';
import Section from '../ui/Section';

export interface ProjectPageParams {
  id: string;
}

export interface ProjectPagePublicProps extends RouteComponentProps<ProjectPageParams> {
}

interface ProjectPagePrivateProps {
  project: ProjectModel;
}

type Props = ProjectPagePublicProps & ProjectPagePrivateProps;

const Container = styled('div', {
  padding: '1rem',
  borderRadius: '0.5rem',
  border: '1px solid #ccc',
  backgroundColor: 'rgb(255, 255, 255)',
});

class ProjectPage extends React.Component<Props> {
  render() {
    const { props } = this;
    const { project } = props;

    return (
      <Container>
        <Section title='Project'>
          <Project project={project} />
        </Section>
      </Container>
    );
  }
}

export default connect((state: State, ownProps: ProjectPagePublicProps) => ({
  project: state.projects[ownProps.match.params.id],
}))(ProjectPage) as React.ComponentType<ProjectPagePublicProps>;