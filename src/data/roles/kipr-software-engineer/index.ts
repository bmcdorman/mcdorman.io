import Location from '../../../model/Location';
import Role from '../../../model/Role';

// @ts-ignore
import description from 'bundle-text:./description.md';
import OrganizationRef from '../../../model/OrganizationRef';

export default {
  id: 'kipr-software-engineer',
  name: 'Software Engineer',
  organizationRef: OrganizationRef.company('kipr'),
  startDate: '2011-06-01',
  endDate: '2014-02-01',
  location: {
    type: Location.Type.Onsite,
    location: 'Norman, OK',
  },
  description,
} as Role;