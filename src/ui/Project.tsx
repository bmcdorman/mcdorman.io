import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { styled } from 'styletron-react';
import ProjectModel from '../model/Project';
import State from '../State';

import Markdown from './Markdown';
import { StyleProps } from '../style';
import { ItemContainer, ItemTop } from './common';
import Section from './Section';
import Pill from './Pill';

const Description = styled('div', {
  width: '100%'
});

class Project extends React.Component<Project.Props> {
  render() {
    const { props } = this;
    const { project, onClick, className, style } = props;

    const { name, description, toolsUsed, contributions } = project;

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
        {description && (
          <Description>
            <Markdown>
              {description}
            </Markdown>
          </Description>
        )}
        {toolsUsed && (
          <Section title='Tools Used' inline>
            {toolsUsed.map((toolUsed, i) => (
              <Pill key={i}>{toolUsed}</Pill>
            ))}
          </Section>
        )}
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