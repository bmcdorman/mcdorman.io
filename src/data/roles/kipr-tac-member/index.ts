import Location from '../../../model/Location';
import Role from '../../../model/Role';

// @ts-ignore
import description from 'bundle-text:./description.md';
import OrganizationRef from '../../../model/OrganizationRef';

export default {
  id: 'kipr-tac-member',
  name: 'Technical Advisory Committee Chair',
  organizationRef: OrganizationRef.company('kipr'),
  startDate: '2019-05-01',
  description,
  location: Location.REMOTE,
  hideStatic: true,
  kind: 'advisor'
} as Role;