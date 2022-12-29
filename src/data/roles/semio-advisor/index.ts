import Location from '../../../model/Location';
import Role from '../../../model/Role';

// @ts-ignore
import description from 'bundle-text:./description.md';
import OrganizationRef from '../../../model/OrganizationRef';

export default {
  id: 'semio-advisor',
  name: 'Advisor',
  organizationRef: OrganizationRef.company('semio'),
  startDate: '2023-04-13',
  description,
} as Role;