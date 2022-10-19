import * as React from 'react';
import { styled } from 'styletron-react';
import ProgrammingLanguage from './model/ProgrammingLanguage';

import Skill from './model/Skill';

export interface SkillsProps {
  skills: Skill[];
}

type Props = SkillsProps;

export const Pill = styled('span', {
  padding: '0.2em',
  borderRadius: '0.5em',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
});

const Container = styled('div', {
  width: '100%',
  
});

const Header = styled('div', {
  fontWeight: 400,
});

class Skills extends React.Component<Props> {
  render() {
    const { props } = this;
    const { skills } = props;

    const programmingLanguages = skills
      .filter(Skill.isProgrammingLanguage)
      .map((skill, i) => <Pill key={i}>{ProgrammingLanguage.name(skill.programmingLanguage)}</Pill>);


    return (
      <Container>
        <Header>Programming Languages</Header>
        {programmingLanguages}
      </Container>
    );
  }
}

export default Skills;