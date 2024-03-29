import Location from '../../../model/Location';
import Role from '../../../model/Role';

// @ts-ignore
import description from 'bundle-text:./description.md';
import OrganizationRef from '../../../model/OrganizationRef';

export default {
  id: 'kipr-board-member',
  name: 'Board Member',
  organizationRef: OrganizationRef.company('kipr'),
  startDate: '2021-04-01',
  description,
  location: Location.REMOTE,
  kind: 'advisor'
} as Role;