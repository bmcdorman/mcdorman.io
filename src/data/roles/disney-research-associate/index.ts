import Location from '../../../model/Location';
import Role from '../../../model/Role';

// @ts-ignore
import description from 'bundle-text:./description.md';
// @ts-ignore
import shortDescription from 'bundle-text:./short_description.md';
import OrganizationRef from '../../../model/OrganizationRef';

export default {
  id: 'disney-research-associate',
  name: 'Associate',
  organizationRef: OrganizationRef.company('disney-research'),
  startDate: '2015-05-01',
  endDate: '2015-08-01',
  location: {
    type: Location.Type.Onsite,
    location: 'Pittsburgh, PA',
  },
  description,
  shortDescription,
  kind: 'employee'
} as Role;