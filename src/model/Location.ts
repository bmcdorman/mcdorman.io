namespace Location {
  export enum Type {
    Onsite = 'onsite',
    Remote = 'remote',
  }

  export interface Onsite {
    type: Type.Onsite;
    location: string;
  }

  export interface Remote {
    type: Type.Remote;
  }

  export const REMOTE: Remote = { type: Type.Remote };
}

type Location = Location.Onsite | Location.Remote;

export default Location;