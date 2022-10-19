namespace Contact {
  export enum Type {
    Email = 'email',
    Phone = 'phone',
  }

  export interface Email {
    type: Type.Email;
    email: string;
  }

  export interface Phone {
    type: Type.Phone;
    phone: string;
  }
}

type Contact = Contact.Email | Contact.Phone;

export default Contact;