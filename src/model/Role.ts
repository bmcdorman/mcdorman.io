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

namespace Role {
  export const ascendingStartDate = (a: Role, b: Role): number => {
    if (a.startDate < b.startDate) return -1;
    if (a.startDate > b.startDate) return 1;
    return 0;
  };

  export const descendingStartDate = (a: Role, b: Role): number => {
    if (a.startDate < b.startDate) return 1;
    if (a.startDate > b.startDate) return -1;
    return 0;
  };

  export const descending = (a: Role, b: Role): number => {
    if (!a.endDate && !b.endDate) return descendingStartDate(a, b);
    if (!a.endDate && b.endDate) return -1;
    if (a.endDate && !b.endDate) return 1;
    if (a.endDate! > b.endDate!) return -1;
    if (a.endDate! < b.endDate!) return 1;
    return 0;
  };
}

export default Role;