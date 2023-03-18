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
  organizationRef: OrganizationRef.school('ouhsc'),
  location: {
    type: Location.Type.Onsite,
    location: 'Oklahoma City, OK',
  },
  description,
  hideStatic: true,
  kind: 'employee'
} as Role;