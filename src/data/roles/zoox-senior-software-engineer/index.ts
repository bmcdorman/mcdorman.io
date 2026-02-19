import Location from '../../../model/Location';
import Role from '../../../model/Role';

// @ts-ignore
import description from 'bundle-text:./description.md';
import OrganizationRef from '../../../model/OrganizationRef';

export default {
  id: 'zoox-senior-software-engineer',
  name: 'Senior Software Engineer',
  organizationRef: OrganizationRef.company('zoox'),
  startDate: '2023-06-01',
  endDate: '2024-09-01',
  location: {
    type: Location.Type.Onsite,
    location: 'Foster City, CA',
  },
  description,
  kind: 'employee'
} as Role;
