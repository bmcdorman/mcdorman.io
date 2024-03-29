import Location from '../../../model/Location';
import Role from '../../../model/Role';

// @ts-ignore
import description from 'bundle-text:./description.md';
import OrganizationRef from '../../../model/OrganizationRef';

export default {
  id: 'plasma-umass-gsoc',
  name: 'Google Summer of Code Student',
  startDate: '2013-06-01',
  endDate: '2013-09-01',
  organizationRef: OrganizationRef.company('plasma-umass'),
  location: Location.REMOTE,
  description,
  hideStatic: true,
  kind: 'employee'
} as Role;