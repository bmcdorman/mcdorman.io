import Location from '../../../model/Location';
import Role from '../../../model/Role';

// @ts-ignore
import description from 'bundle-text:./description.md';
import OrganizationRef from '../../../model/OrganizationRef';

export default {
  id: 'microsoft-software-development-intern',
  name: 'Software Development Engineer Intern',
  organizationRef: OrganizationRef.company('microsoft'),
  startDate: '2014-05-01',
  endDate: '2014-08-01',
  location: {
    type: Location.Type.Onsite,
    location: 'Redmond, WA',
  },
  description,
} as Role;