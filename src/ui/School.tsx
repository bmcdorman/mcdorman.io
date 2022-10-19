import * as React from 'react';
import { styled } from 'styletron-react';

import SchoolModel from '../model/School';
import { FlexSpacer } from '../style';

import Markdown from '../ui/Markdown';

const Container = styled('div', {
  padding: '0.5rem',
});

const Top = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '1.5em',
});

const DetailTop = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '1.2em',
  opacity: 0.5,
});

const Name = styled('div', {
  
});

const Info = styled('div', {
});

const Image = styled('img', {
  height: '2.5em',
});

class School extends React.Component<School.Props> {
  render() {
    const { props } = this;
    const { school } = props;

    const { name, description, url } = school;

    return (
      <Container>
        <Top>
          <Info>
            <Name>{name}</Name>
            {url ? <a href={url} target="_blank" rel="noopener noreferrer">Website</a> : null}
          </Info>
          <FlexSpacer />
          {school.logoUri ? <Image src={school.logoUri} /> : null}
        </Top>
        {description ? <Markdown>{description}</Markdown> : null}
      </Container>
    );
  }
}

namespace School {
  export interface Props {
    school: SchoolModel;
  }
}

export default School;