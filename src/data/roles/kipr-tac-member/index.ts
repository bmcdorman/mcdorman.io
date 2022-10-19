import Location from '../../../model/Location';
import Role from '../../../model/Role';

// @ts-ignore
import description from 'bundle-text:./description.md';
import OrganizationRef from '../../../model/OrganizationRef';

export default {
  id: 'kipr-tac-member',
  name: 'Technical Advisory Committee Member',
  organizationRef: OrganizationRef.company('kipr'),
  startDate: '2019-05-01',
  location: Location.REMOTE,
  description,
} as Role;