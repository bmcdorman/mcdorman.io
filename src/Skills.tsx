import * as React from 'react';
import { styled } from 'styletron-react';
import ProgrammingLanguage from './model/ProgrammingLanguage';

import Skill from './model/Skill';
import Pill from './ui/Pill';

export interface SkillsProps {
  skills: Skill[];
}

type Props = SkillsProps;



const Container = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
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