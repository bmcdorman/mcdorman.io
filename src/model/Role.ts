import Location from './Location';
import OrganizationRef from './OrganizationRef';

interface Role {
  id: string;
  name: string;
  startDate: string;
  endDate?: string;
  description?: string;
  shortDescription?: string;
  organizationRef?: OrganizationRef;
  location?: Location;
  hideStatic?: boolean;
  kind: 'employee' | 'advisor';
}

export default Role;