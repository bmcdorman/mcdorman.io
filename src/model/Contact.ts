namespace Contact {
  export enum Type {
    Email = 'email',
    Phone = 'phone',
    LinkedIn = 'linkedin',
    GitHub = 'github',
  }

  export interface Email {
    type: Type.Email;
    email: string;
  }

  export interface Phone {
    type: Type.Phone;
    phone: string;
  }

  export interface LinkedIn {
    type: Type.LinkedIn;
    username: string;
  }

  export interface GitHub {
    type: Type.GitHub;
    username: string;
  }
}

type Contact = Contact.Email | Contact.Phone | Contact.LinkedIn | Contact.GitHub;

export default Contact;
