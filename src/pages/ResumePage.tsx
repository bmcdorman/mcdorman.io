import * as React from 'react';
import { connect } from 'react-redux';

import { styled, withStyleDeep } from 'styletron-react';
import Contact from '../Contact';
import ResumeModel from '../model/Resume';
import RoleModel from '../model/Role';
import Section from '../ui/Section';
import Subsection from '../ui/Subsection';
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
import EducationModel from '../model/Education';
import { descending } from '../model/sort';
import Education from '../ui/Education';
import resizeListener, { ResizeListener } from '../util/resizeListener';
import Vector2 from '../math/Vector2';



const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
});

const Float = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  ':first-child': {
    borderTopLeftRadius: '1rem',
    borderBottomLeftRadius: '1rem',
    borderLeft: '1px solid #ccc',
  },
  ':last-child': {
    borderTopRightRadius: '1rem',
    borderBottomRightRadius: '1rem',
  },
  // if not last child, add a border to the right
  borderRight: '1px solid #ccc',
  borderTop: '1px solid #ccc',
  borderBottom: '1px solid #ccc',
  backgroundColor: 'rgb(255, 255, 255)',
});

const Left = withStyleDeep(Float, {
  flex: 5,
});

const Right = withStyleDeep(Float, {
  flex: 2,
});



class ResumePage extends React.Component<ResumePage.Props, ResumePage.State> {
  constructor(props: ResumePage.Props) {
    super(props);

    this.state = {
      rolesStyle: ResumePage.RolesStyle.Compressed,
      size: undefined,
    };
  }

  private listener_ = resizeListener(size => this.setState({ size }));

  private onRoleClick_ = (id: string) => (event: React.MouseEvent) => {
    this.props.onRoleClick(id);
  };

  private onRolesStyleChange_ = (index: number) => {
    this.setState({
      rolesStyle: ResumePage.ROLES_STYLE_OPTIONS[index].userData as ResumePage.RolesStyle,
    });
  };

  private containerRef_: HTMLDivElement;
  private bindContainerRef_ = (ref: HTMLDivElement) => {
    if (this.containerRef_) this.listener_.unobserve(this.containerRef_);
    this.containerRef_ = ref;
    if (this.containerRef_) this.listener_.observe(this.containerRef_);
  };

  componentWillUnmount() {
    this.listener_.disconnect();
  }

  render() {
    const { props, state } = this;
    const { resume, roles, education } = props;
    const { about, contacts, skills } = resume;
    const { rolesStyle, size } = state;

    const roleModels: RoleModel[] = resume.roleIds.map(id => roles[id]);
    roleModels.sort(descending);

    const educationModels: EducationModel[] = Object.values(education);
    educationModels.sort(descending);

    const rolesRight = Component.create(OneOf, {
      options: ResumePage.ROLES_STYLE_OPTIONS,
      index: ResumePage.ROLES_STYLE_OPTIONS.findIndex(option => option.userData === this.state.rolesStyle)!,
      onChange: this.onRolesStyleChange_,
    });

    const aboutSection = (
      <Section title='Hi! 👋'>
        <Markdown>{about}</Markdown>
      </Section>
    );

    const rolesSection = (
      <Section title='Roles' right={rolesRight}>
        {roleModels.map(role => (
          <Role
            key={role.id}
            role={role}
            onClick={this.onRoleClick_(role.id)}
            mini={rolesStyle === ResumePage.RolesStyle.Compressed}
          />
        ))}
      </Section>
    );

    const educationSection = (
      <Section title='Education'>
        {educationModels.map(education => (
          <Education
            key={education.id}
            education={education}
          />
        ))}
      </Section>
    );

    const contactSection = (
      <Section title='Contact'>
        {contacts.map((contact, i) => (
          <Contact key={i} contact={contact} />
        ))}
      </Section>
    );

    const skillsSection = (
      <Section title='Experience'>
        {skills.expert && (
          <Subsection title='> 10 years'>
            <Skills skills={skills.expert} />
          </Subsection>
        )}
        {skills.proficient && (
          <Subsection title='> 5 years'>
            <Skills skills={skills.proficient} />
          </Subsection>
        )}
        {skills.familiar && (
          <Subsection title='> 2 years'>
            <Skills skills={skills.familiar} />
          </Subsection>
        )}
      </Section>
    );

    const width = size ? size.x : window.innerWidth;

    if (width > 900) {
      return (
        <Container ref={this.bindContainerRef_}>
          <Left>
            {aboutSection}
            {rolesSection}
            {educationSection}
          </Left>
          <Right>
            {contactSection}
            {skillsSection}
          </Right>
        </Container>
      );
    } else {
      return (
        <Container ref={this.bindContainerRef_}>
          <Left>
            {aboutSection}
            {contactSection}
            {rolesSection}
            {educationSection}
            {skillsSection}
          </Left>
        </Container>
      );
    }
  }
}

namespace ResumePage {
  export interface PublicProps extends RouteComponentProps {

  }
  
  interface PrivateProps {
    resume: ResumeModel;
    roles: { [id: string]: RoleModel };
    education: { [id: string]: EducationModel };
  
    onRoleClick: (id: string) => void;
  }
  
  export type Props = PublicProps & PrivateProps;

  export enum RolesStyle {
    Compressed = 0,
    Expanded = 1,
  }

  export interface State {
    size?: Vector2;
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
  education: state.education,
}), dispatch => ({
  onRoleClick: (id: string) => dispatch(push(`/role/${id}`)),
}))(ResumePage) as React.ComponentType<ResumePage.PublicProps>;