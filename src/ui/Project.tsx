import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { styled } from 'styletron-react';
import ProjectModel from '../model/Project';
import State from '../State';

import Markdown from './Markdown';
import { StyleProps } from '../style';
import { ItemContainer, ItemTop } from './common';

class Project extends React.Component<Project.Props> {
  render() {
    const { props } = this;
    const { project, onClick, className, style } = props;

    const { name, description } = project;

    return (
      <ItemContainer
        className={className}
        style={style}
        onClick={onClick}
        $clickable={!!onClick}
      >
        <ItemTop>
          <div>{name}</div>
        </ItemTop>
        {description && <Markdown>{description}</Markdown>}
      </ItemContainer>
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