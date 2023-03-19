
import Contribution from '../../../model/Contribution';
import ContributionLevel from '../../../model/ContributionLevel';
import ProgrammingLanguage from '../../../model/ProgrammingLanguage';
import Project from '../../../model/Project';

// @ts-ignore
import description from 'bundle-text:./description.md';

export default {
  id: 'semio-attention-generation',
  name: 'Attention Generation Driver',
  companyId: 'semio',
  roleIds: [ 'semio-cofounder-cto' ],
  contributionLevel: ContributionLevel.Critical,
  contributions: [{
    type: Contribution.Type.Programming,
    programmingLanguages: [
      ProgrammingLanguage.CPlusPlus
    ],
  }],
  description,
} as Project;