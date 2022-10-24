import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { styled } from 'styletron-react';

import CompanyModel from '../model/Company';
import State from '../State';
import { FlexSpacer } from '../style';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Link from './Link';

import Markdown from '../ui/Markdown';

const Container = styled('div', {
  padding: '0.5rem',
});

const Top = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '1.5em',
});

const Detail = styled('div', {
  fontSize: '1rem',
});

const Name = styled('div', {
  
});

const Info = styled('div', {
});

const Image = styled('img', {
  height: '2.5em',
});

class Company extends React.Component<Company.Props> {
  render() {
    const { props } = this;
    const { company } = props;

    const { name, description, url } = company;

    return (
      <Container>
        <Top>
          <Info>
            <Name>{name}</Name>
            {url && (
              <Detail>
                <Link href={url} target="_blank" rel="noopener noreferrer"><Icon icon={faLink} /> Website</Link>
              </Detail>
            )}

          </Info>
          <FlexSpacer />
          {company.logoUri ? <Image src={company.logoUri} /> : null}
        </Top>
        {description ? <Markdown>{description}</Markdown> : null}
      </Container>
    );
  }
}

namespace Company {
  export interface Props {
    company: CompanyModel;
  }
}

export default Company;