import Location from '../../../model/Location';
import Role from '../../../model/Role';

// @ts-ignore
import description from 'bundle-text:./description.md';
import OrganizationRef from '../../../model/OrganizationRef';

export default {
  id: 'kipr-software-intern',
  name: 'Software Engineering Intern',
  organizationRef: OrganizationRef.company('kipr'),
  startDate: '2016-01-01',
  endDate: '2019-01-01',
  location: {
    type: Location.Type.Onsite,
    location: 'Norman, OK',
  },
  description,
} as Role;