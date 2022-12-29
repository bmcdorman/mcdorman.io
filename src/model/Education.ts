import Location from './Location';
import OrganizationRef from './OrganizationRef';

interface Education {
  id: string;
  name: string;
  shorthand?: string;
  organizationRef: OrganizationRef;
  location: Location;
  startDate: string;
  endDate?: string;
  description?: string;
}

export default Education;