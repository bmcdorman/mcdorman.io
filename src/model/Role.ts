import Location from './Location';
import OrganizationRef from './OrganizationRef';

interface Role {
  id: string;
  name: string;
  startDate: string;
  endDate?: string;
  description?: string;
  organizationRef?: OrganizationRef;
  location?: Location;
}

export default Role;