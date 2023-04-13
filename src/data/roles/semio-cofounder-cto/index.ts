import Location from '../../../model/Location';
import Role from '../../../model/Role';

// @ts-ignore
import description from 'bundle-text:./description.md';
// @ts-ignore
import shortDescription from 'bundle-text:./short_description.md';
import OrganizationRef from '../../../model/OrganizationRef';

export default {
  id: 'semio-cofounder-cto',
  name: 'Co-Founder & CTO',
  organizationRef: OrganizationRef.company('semio'),
  startDate: '2015-01-02',
  endDate: '2023-04-03',
  location: {
    type: Location.Type.Onsite,
    location: 'Los Angeles, CA',
  },
  description,
  shortDescription,
  kind: 'employee'
} as Role;