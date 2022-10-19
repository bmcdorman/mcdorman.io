import Education from '../../../model/Education';

// @ts-ignore
import description from 'bundle-text:./description.md';
import OrganizationRef from '../../../model/OrganizationRef';
import Location from '../../../model/Location';

export default {
  id: 'ossm-highschool',
  name: 'High School',
  organizationRef: OrganizationRef.school('ossm'),
  location: {
    type: Location.Type.Onsite,
    location: 'Oklahoma City, OK',
  },
  startDate: '2010-08-01',
  endDate: '2012-05-01',
  description
} as Education;