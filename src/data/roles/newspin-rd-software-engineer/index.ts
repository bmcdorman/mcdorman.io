import Location from '../../../model/Location';
import Role from '../../../model/Role';

// @ts-ignore
import description from 'bundle-text:./description.md';
import OrganizationRef from '../../../model/OrganizationRef';

export default {
  id: 'newspin-rd-software-engineer',
  name: 'Research and Development Software Engineer',
  organizationRef: OrganizationRef.company('newspin'),
  startDate: '2014-01-01',
  endDate: '2014-04-01',
  location: Location.REMOTE,
  description,
} as Role;