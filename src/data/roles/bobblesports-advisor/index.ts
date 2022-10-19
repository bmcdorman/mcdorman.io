import Location from '../../../model/Location';
import Role from '../../../model/Role';

// @ts-ignore
import description from 'bundle-text:./description.md';
import OrganizationRef from '../../../model/OrganizationRef';

export default {
  id: 'bobblesports-advisor',
  name: 'Advisor',
  organizationRef: OrganizationRef.company('bobblesports'),
  startDate: '2020-01-01',
  location: Location.REMOTE,
  description,
} as Role;