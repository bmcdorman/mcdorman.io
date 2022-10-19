import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { styled } from 'styletron-react';
import ProjectModel from '../model/Project';
import State from '../State';

import Markdown from './Markdown';
import { StyleProps } from '../style';

const Container = styled('div', ({ $clickable }: { $clickable: boolean }) => ({
  ':hover': $clickable ? {
    backgroundColor: `rgba(0, 0, 0, 0.1)`,
  } : {},
  cursor: $clickable ? 'pointer' : 'default',
  padding: '0.5rem',
  borderRadius: '0.5rem',
  transition: 'background-color 0.2s',
}));

const Name = styled('div', {
  fontSize: '1.5em',
  fontWeight: 400,
});

class Project extends React.Component<Project.Props> {
  render() {
    const { props } = this;
    const { project, onClick, className, style } = props;

    const { name, description } = project;

    return (
      <Container
        className={className}
        style={style}
        onClick={onClick}
        $clickable={!!onClick}
      >
        <Name>{name}</Name>
        {description ? <Markdown>{description}</Markdown> : null}
      </Container>
    );
  }
}

namespace Project {
  export interface Props extends StyleProps {
    project: ProjectModel;
  
    onClick?: (event: React.MouseEvent) => void;
  }
}

export default Project;