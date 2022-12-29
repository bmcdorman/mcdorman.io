import CompanyModel from './Company';
import SchoolModel from './School';

namespace Organization {
  export enum Type {
    Company = 'company',
    School = 'school',
  }

  export interface Company {
    type: Type.Company;
    company: CompanyModel;
  }

  export interface School {
    type: Type.School;
    school: CompanyModel;
  }

  export const name = (organization: Organization): string => {
    switch (organization.type) {
      case Type.Company:
        return organization.company.name;
      case Type.School:
        return organization.school.name;
    }
  };

  export const shorthand = (organization: Organization): string => {
    switch (organization.type) {
      case Type.Company:
        return organization.company.shorthand || organization.company.name;
      case Type.School:
        return organization.school.shorthand || organization.school.name;
    }
  };

  export const logoUri = (organization: Organization): string | undefined => {
    switch (organization.type) {
      case Type.Company:
        return organization.company.logoUri;
      case Type.School:
        return organization.school.logoUri;
    }
  };

}

type Organization = Organization.Company | Organization.School;

export default Organization;