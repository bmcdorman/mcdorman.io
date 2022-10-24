import Location from '../../../model/Location';
import Role from '../../../model/Role';

// @ts-ignore
import description from 'bundle-text:./description.md';
import OrganizationRef from '../../../model/OrganizationRef';

export default {
  id: 'ouhsc-student-researcher',
  name: 'Student Researcher',
  startDate: '2011-08-01',
  endDate: '2012-05-01',
  location: Location.REMOTE,
  description,
} as Role;