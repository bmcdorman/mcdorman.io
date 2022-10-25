// @ts-ignore
import description from 'bundle-text:./description.md';
import Contribution from '../../../model/Contribution';
import ContributionLevel from '../../../model/ContributionLevel';
import ProgrammingLanguage from '../../../model/ProgrammingLanguage';
import Project from '../../../model/Project';

export default {
  id: 'semio-studio',
  name: 'Studio',
  companyId: 'semio',
  roleIds: [ 'semio-cofounder-cto' ],
  contributionLevel: ContributionLevel.Critical,
  contributions: [{
    type: Contribution.Type.Programming,
    programmingLanguages: [
      ProgrammingLanguage.TypeScript,
      ProgrammingLanguage.JavaScript,
      ProgrammingLanguage.CPlusPlus
    ],
  }],
  description,
} as Project;