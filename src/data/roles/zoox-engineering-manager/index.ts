import Location from '../../../model/Location';
import Role from '../../../model/Role';

// @ts-ignore
import description from 'bundle-text:./description.md';
// @ts-ignore
import shortDescription from 'bundle-text:./short_description.md';
import OrganizationRef from '../../../model/OrganizationRef';

export default {
  id: 'zoox-engineering-manager',
  name: 'Engineering Manager',
  organizationRef: OrganizationRef.company('zoox'),
  startDate: '2024-09-01',
  location: {
    type: Location.Type.Onsite,
    location: 'Foster City, CA',
  },
  description,
  shortDescription,
  kind: 'employee'
} as Role;
