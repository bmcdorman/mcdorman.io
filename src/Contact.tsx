import * as React from 'react';

import ContactModel from './model/Contact';

import { styled } from 'styletron-react';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

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
    }
  }
}

export default Contact;