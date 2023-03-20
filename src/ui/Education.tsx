import * as React from 'react';

import EducationModel from '../model/Education';

import { styled } from 'styletron-react';
import Markdown from './Markdown';
import { connect } from 'react-redux';
import State from '../State';
import { FlexSpacer } from '../style';
import { push } from 'connected-react-router';
import { toHumanMonthYear } from '../util/date';
import Location from '../model/Location';
import OrganizationRef from '../model/OrganizationRef';
import OrganizationModel from '../model/Organization';
import { ItemContainer, ItemTop } from './common';

export interface EducationPublicProps {
  education: EducationModel;
  onClick?: (event: React.MouseEvent) => void;
  mini?: boolean;
  hideOrganization?: boolean;
}

interface EducationPrivateProps {
  organization?: OrganizationModel;

  onOrganizationClick: (ref: OrganizationRef, event: React.MouseEvent) => void;
}

type Props = EducationPublicProps & EducationPrivateProps;

const Info = styled('div', {
});

const Name = styled('div', {
  
});

const Company = styled('div', {
  marginLeft: '1rem',
  cursor: 'pointer'
});

const CompanyName = styled('div', {
  fontSize: '1rem',
  cursor: 'pointer'
});

const Image = styled('img', {
  height: '2.5em',
});

const Dates = styled('div', {
  fontSize: '1rem',
});

const LocationContainer = styled('div', {
  fontSize: '1rem',
});

class Education extends React.Component<Props> {
  private onOrganizationClick_ = (ref: OrganizationRef) => (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onOrganizationClick(ref, event);
  };

  render() {
    const { props } = this;
    const {
      education,
      organization,
      onClick,
      hideOrganization,
      mini
    } = props;

    const { name, description, location } = education;

    const startDate = new Date(education.startDate);
    const endDate = education.endDate ? new Date(education.endDate) : null;
    
    const organizationLogoUri = organization ? OrganizationModel.logoUri(organization) : null;

    return (
      <ItemContainer onClick={onClick} $clickable={!!onClick}>
        <ItemTop>
          <Info>
            <Name>{name}</Name>
            {organization && !hideOrganization && (
              <CompanyName onClick={this.onOrganizationClick_(education.organizationRef!)}>{OrganizationModel.name(organization)}</CompanyName>
            )}
            <Dates>
              {toHumanMonthYear(startDate)} to {endDate ? toHumanMonthYear(endDate) : 'Present'}
            </Dates>
            
            {location ? (
              <LocationContainer>
                {location.type === Location.Type.Remote ? 'Remote' : location.location}
              </LocationContainer>
            ) : null}
            
          </Info>
          <FlexSpacer />
          {organizationLogoUri && !hideOrganization && (
            <Company
              onClick={this.onOrganizationClick_(education.organizationRef!)}
            >
              <Image src={organizationLogoUri} />
            </Company>
          )}
        </ItemTop>
        {description && !mini && <Markdown className='smaller'>{description}</Markdown>}
      </ItemContainer>
    );
  }
}

export default connect((state: State, { education: role }: EducationPublicProps) => ({
  organization: role.organizationRef ? OrganizationRef.resolve(role.organizationRef, state) : undefined,
}), dispatch => ({
  onOrganizationClick: (ref: OrganizationRef) => {
    switch (ref.type) {
      case OrganizationRef.Type.Company: {
        dispatch(push(`/company/${ref.id}`));
        break;
      }
      case OrganizationRef.Type.School: {
        dispatch(push(`/school/${ref.id}`));
        break;
      }
    }
  }
}))(Education) as React.ComponentType<EducationPublicProps>;