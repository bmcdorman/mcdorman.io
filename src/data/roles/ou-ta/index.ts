import Location from '../../../model/Location';
import Role from '../../../model/Role';

// @ts-ignore
import description from 'bundle-text:./description.md';
// @ts-ignore
import shortDescription from 'bundle-text:./short_description.md';
import OrganizationRef from '../../../model/OrganizationRef';

export default {
  id: 'ou-ta',
  name: 'Teaching Assistant',
  startDate: '2013-08-01',
  endDate: '2014-03-01',
  organizationRef: OrganizationRef.school('ou'),
  location: {
    type: Location.Type.Onsite,
    location: 'Norman, OK',
  },
  description,
  shortDescription,
  hideStatic: true,
  kind: 'employee'
} as Role;