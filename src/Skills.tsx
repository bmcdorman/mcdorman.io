import * as React from 'react';
import { styled } from 'styletron-react';
import Rgb from './math/Rgb';
import ProgrammingLanguage from './model/ProgrammingLanguage';

import Skill from './model/Skill';
import Pill from './ui/Pill';

export interface SkillsProps {
  skills: Skill[];
}

type Props = SkillsProps;



const Container = styled('div', {
  width: '100%',
});

const Header = styled('div', {
  fontWeight: 400,
});

const PillContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
});

const TYPE_COLOR: { [key in Skill['type']]: Rgb } = {
  'programming-language': { r: 141 / 255, g: 2 / 255, b: 31 / 255 },
  library: { r: 20 / 255, g: 1 / 255, b: 141 / 255 },
  tool: { r: 1 / 255, g: 141 / 255, b: 66 / 255 },
};

class Skills extends React.Component<Props> {
  render() {
    const { props } = this;
    const { skills } = props;

    const pills = skills.map((skill, i) => (
      <Pill $backgroundColor={{ rgb: TYPE_COLOR[skill.type], a: 1 }} key={i}>
        {Skill.name(skill)}
      </Pill>
    ));


    return (
      <Container>
        <PillContainer>
          {pills}
        </PillContainer>
      </Container>
    );
  }
}

export default Skills;