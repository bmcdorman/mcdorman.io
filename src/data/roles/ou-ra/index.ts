import Location from '../../../model/Location';
import Role from '../../../model/Role';

// @ts-ignore
import description from 'bundle-text:./description.md';
import OrganizationRef from '../../../model/OrganizationRef';

export default {
  id: 'ou-ra',
  name: 'Research Assistant',
  startDate: '2013-08-01',
  endDate: '2014-01-01',
  organizationRef: OrganizationRef.school('ou'),
  location: {
    type: Location.Type.Onsite,
    location: 'Norman, OK',
  },
  description,
} as Role;