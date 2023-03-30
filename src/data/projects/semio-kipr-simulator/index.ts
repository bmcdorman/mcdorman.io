
import Contribution from '../../../model/Contribution';
import ContributionLevel from '../../../model/ContributionLevel';
import ProgrammingLanguage from '../../../model/ProgrammingLanguage';
import Project from '../../../model/Project';

// @ts-ignore
import description from 'bundle-text:./description.md';

export default {
  id: 'semio-kipr-simulator',
  name: 'KIPR Simulator',
  companyId: 'semio',
  roleIds: [ 'semio-cofounder-cto' ],
  contributionLevel: ContributionLevel.Critical,
  contributions: [{
    type: Contribution.Type.Programming,
    programmingLanguages: [
      ProgrammingLanguage.TypeScript,
      ProgrammingLanguage.JavaScript
    ],
  }],
  description,
} as Project;