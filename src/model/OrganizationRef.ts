import State from '../State';
import Organization from './Organization';

namespace OrganizationRef {
  export enum Type {
    Company = 'company',
    School = 'school',
  }

  export interface Company {
    type: Type.Company;
    id: string;
  }

  export const company = (id: string): Company => ({
    type: Type.Company,
    id,
  });

  export interface School {
    type: Type.School;
    id: string;
  }

  export const school = (id: string): School => ({
    type: Type.School,
    id,
  });

  export const resolve = (ref: OrganizationRef, state: State): Organization => {
    switch (ref.type) {
      case Type.Company:
        return {
          type: Organization.Type.Company,
          company: state.companies[ref.id],
        };
      case Type.School:
        return {
          type: Organization.Type.School,
          school: state.schools[ref.id],
        };
    };
  }
}

type OrganizationRef = OrganizationRef.Company | OrganizationRef.School;

export default OrganizationRef;
