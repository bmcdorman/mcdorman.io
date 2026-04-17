import * as React from 'react';

import ContactModel from './model/Contact';

import { styled } from 'styletron-react';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export interface ContactProps {
  contact: ContactModel;
}

type Props = ContactProps;

const Container = styled('div', {
  marginBottom: '1rem',
});

const Title = styled('div', {
  fontWeight: 500,
});

class Contact extends React.Component<Props> {
  render() {
    const { props } = this;
    const { contact } = props;

    switch (contact.type) {
      case 'email':
        return (
          <Container>
            <Title><Icon icon={faEnvelope} /> Email</Title>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </Container>
        );
      case 'phone':
        return (
          <Container>
            <Title><Icon icon={faPhone} /> Phone</Title>
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          </Container>
        );
      case 'linkedin':
        return (
          <Container>
            <Title><Icon icon={faLinkedin} /> LinkedIn</Title>
            <a href={`https://www.linkedin.com/in/${contact.username}/`}>linkedin.com/in/{contact.username}</a>
          </Container>
        );
      case 'github':
        return (
          <Container>
            <Title><Icon icon={faGithub} /> GitHub</Title>
            <a href={`https://github.com/${contact.username}`}>github.com/{contact.username}</a>
          </Container>
        );
    }
  }
}

export default Contact;
