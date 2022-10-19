import Education from '../../../model/Education';

// @ts-ignore
import description from 'bundle-text:./description.md';
import OrganizationRef from '../../../model/OrganizationRef';
import Location from '../../../model/Location';

export default {
  id: 'usc-phd-cs',
  name: 'Ph.D. in Computer Science - Incomplete',
  organizationRef: OrganizationRef.school('usc'),
  location: {
    type: Location.Type.Onsite,
    location: 'Los Angeles, CA',
  },
  startDate: '2015-08-01',
  endDate: '2016-12-01',
  description
} as Education;