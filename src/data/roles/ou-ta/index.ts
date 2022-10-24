import Location from '../../../model/Location';
import Role from '../../../model/Role';

// @ts-ignore
import description from 'bundle-text:./description.md';
import OrganizationRef from '../../../model/OrganizationRef';

export default {
  id: 'ou-ta',
  name: 'Teaching Assistant',
  startDate: '2013-08-01',
  endDate: '2014-03-01',
  location: {
    type: Location.Type.Onsite,
    location: 'Norman, OK',
  },
  description,
} as Role;