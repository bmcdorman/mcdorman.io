import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import RoleModel from '../model/Role';
import CompanyModel from '../model/Company';

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

export interface RolePublicProps {
  role: RoleModel;
  onClick?: (event: React.MouseEvent) => void;
  mini?: boolean;
  hideOrganization?: boolean;
}

interface RolePrivateProps {
  organization?: OrganizationModel;

  onOrganizationClick: (ref: OrganizationRef, event: React.MouseEvent) => void;
}

type Props = RolePublicProps & RolePrivateProps;

const Container = styled('div', ({ $clickable }: { $clickable: boolean }) => ({
  ':hover': $clickable ? {
    backgroundColor: `rgba(0, 0, 0, 0.1)`,
  } : {},
  cursor: $clickable ? 'pointer' : 'default',
  padding: '0.5rem',
  borderRadius: '0.5rem',
  transition: 'background-color 0.2s',
}));

const Top = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '1.5em',
  alignItems: 'center',
  marginBottom: '1rem',
});

const Info = styled('div', {
});

const DetailTop = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '1.2em',
  opacity: 0.5,
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

class Role extends React.Component<Props> {
  private onOrganizationClick_ = (ref: OrganizationRef) => (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onOrganizationClick(ref, event);
  };

  render() {
    const { props } = this;
    const {
      role,
      organization,
      onClick,
      hideOrganization,
      mini
    } = props;

    const { name, description, location } = role;

    const startDate = new Date(role.startDate);
    const endDate = role.endDate ? new Date(role.endDate) : null;
    
    const organizationLogoUri = organization ? OrganizationModel.logoUri(organization) : null;

    return (
      <Container onClick={onClick} $clickable={!!onClick}>
        <Top>
          <Info>
            <Name>{name}</Name>
            {organization && !hideOrganization && (
              <CompanyName onClick={this.onOrganizationClick_(role.organizationRef!)}>{OrganizationModel.name(organization)}</CompanyName>
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
              onClick={this.onOrganizationClick_(role.organizationRef!)}
            >
              <Image src={organizationLogoUri} />
            </Company>
          )}
        </Top>
        {description && !mini && <Markdown >{description}</Markdown>}
      </Container>
    );
  }
}

export default connect((state: State, { role }: RolePublicProps) => ({
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
}))(Role) as React.ComponentType<RolePublicProps>;