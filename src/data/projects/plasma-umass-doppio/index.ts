
import Contribution from '../../../model/Contribution';
import ContributionLevel from '../../../model/ContributionLevel';
import ProgrammingLanguage from '../../../model/ProgrammingLanguage';
import Project from '../../../model/Project';

// @ts-ignore
import description from 'bundle-text:./description.md';

export default {
  id: 'plasma-umass-doppio',
  name: 'Doppio',
  companyId: 'plasma-umass',
  roleIds: [ 'plasma-umass-gsoc' ],
  contributionLevel: ContributionLevel.Critical,
  contributions: [{
    type: Contribution.Type.Programming,
    programmingLanguages: [
      ProgrammingLanguage.JavaScript,
      ProgrammingLanguage.Java
    ],
  }],
  description,
} as Project;