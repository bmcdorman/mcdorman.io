import * as React from 'react';
import { connect } from 'react-redux';

import { styled } from 'styletron-react';
import Contact from '../Contact';
import ResumeModel from '../model/Resume';
import RoleModel from '../model/Role';
import Section from '../ui/Section';
import State from '../State';

import Markdown from '../ui/Markdown';
import Role from '../ui/Role';

import Skills from '../Skills';
import { push } from 'connected-react-router';
import Component from '../Component';
import OneOf from '../ui/OneOf';

import { parse } from 'qs';

import { FontAwesomeIcon as Icon, FontAwesomeIconProps as IconProps } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';
import { RouteComponentProps } from 'react-router';



const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  padding: '1rem',
});

const Left = styled('div', {
  flex: 4,
  display: 'flex',
  flexDirection: 'column'
});

const Right = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '1rem',
});



class ResumePage extends React.Component<ResumePage.Props, ResumePage.State> {
  constructor(props: ResumePage.Props) {
    super(props);

    this.state = {
      rolesStyle: ResumePage.RolesStyle.Compressed,
    };
  }

  private onRoleClick_ = (id: string) => (event: React.MouseEvent) => {
    this.props.onRoleClick(id);
  };

  private onRolesStyleChange_ = (index: number) => {
    this.setState({
      rolesStyle: ResumePage.ROLES_STYLE_OPTIONS[index].userData as ResumePage.RolesStyle,
    });
  };

  render() {
    const { props, state } = this;
    const { resume, roles, location } = props;
    const { about, contacts, skills } = resume;
    const { rolesStyle } = state;

    const roleModels: RoleModel[] = resume.roleIds.map(id => roles[id]);
    roleModels.sort(RoleModel.descending);

    const rolesRight = Component.create(OneOf, {
      options: ResumePage.ROLES_STYLE_OPTIONS,
      index: ResumePage.ROLES_STYLE_OPTIONS.findIndex(option => option.userData === this.state.rolesStyle)!,
      onChange: this.onRolesStyleChange_,
    });

    return (
      <Container>
        <Left>
          <Section title='About'>
            <Markdown>{about}</Markdown>
          </Section>
          <Section title='Roles' right={rolesRight}>
            {roleModels.map((role) => (
              <Role
                key={role.id}
                role={role}
                onClick={this.onRoleClick_(role.id)}
                mini={rolesStyle === ResumePage.RolesStyle.Compressed}
              />
            ))}
          </Section>
          <Section title='Education'>
            
          </Section>
        </Left>
        <Right>
          <Section title='Contact'>
            {contacts.map((contact, i) => (
              <Contact key={i} contact={contact} />
            ))}
          </Section>
          <Section title='Skills'>
            <Skills skills={skills.expert} />
          </Section>
        </Right>
      </Container>
    );
  }
}

namespace ResumePage {
  export interface PublicProps extends RouteComponentProps {

  }
  
  interface PrivateProps {
    resume: ResumeModel;
    roles: { [id: string]: RoleModel };
  
    onRoleClick: (id: string) => void;
  }
  
  export type Props = PublicProps & PrivateProps;

  export enum RolesStyle {
    Compressed = 0,
    Expanded = 1,
  }

  export interface State {
    rolesStyle: RolesStyle;
  }

  export const ROLES_STYLE_OPTIONS: OneOf.Option[] = [{
    component: Component.create(Icon, { icon: faCompress }),
    userData: ResumePage.RolesStyle.Compressed
  }, {
    component: Component.create(Icon, { icon: faExpand }),
    userData: ResumePage.RolesStyle.Expanded
  }];
}

export default connect((state: State, ownProps: ResumePage.PublicProps) => ({
  resume: state.resume,
  roles: state.roles,
}), dispatch => ({
  onRoleClick: (id: string) => dispatch(push(`/role/${id}`)),
}))(ResumePage) as React.ComponentType<ResumePage.PublicProps>;