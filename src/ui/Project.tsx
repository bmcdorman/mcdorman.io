import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { styled, withStyleDeep } from 'styletron-react';
import ProjectModel from '../model/Project';
import State from '../State';

import Markdown from './Markdown';
import { StyleProps } from '../style';
import { ItemContainer, ItemTop } from './common';
import Section from './Section';
import Pill from './Pill';
import Rgba from '../math/Rgba';
import Subsection from './Subsection';

import rehypeRaw from "rehype-raw";

const Description = styled('div', {
  width: '100%',
});

const StyledSubsection = styled(Subsection, {
  marginTop: '0.5rem'
});

const StyledPill = withStyleDeep(Pill, {
  marginTop: '0.5rem'
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
            <Markdown className='project-description smaller' rehypePlugins={[ rehypeRaw ]}>
              {description}
            </Markdown>
          </Description>
        )}
        {toolsUsed && (
          <StyledSubsection title='Tools Used'>
            {toolsUsed.map((toolUsed, i) => (
              <Pill $backgroundColor={Rgba.BLACK} key={i}>{toolUsed}</Pill>
            ))}
          </StyledSubsection>
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