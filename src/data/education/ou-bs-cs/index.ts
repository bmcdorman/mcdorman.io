import Education from '../../../model/Education';

// @ts-ignore
import description from 'bundle-text:./description.md';
import OrganizationRef from '../../../model/OrganizationRef';
import Location from '../../../model/Location';

export default {
  id: 'ou-bs-cs',
  name: 'B.S. in Computer Science',
  organizationRef: OrganizationRef.school('ou'),
  location: {
    type: Location.Type.Onsite,
    location: 'Norman, OK',
  },
  startDate: '2012-08-01',
  endDate: '2015-05-01',
  description
} as Education;