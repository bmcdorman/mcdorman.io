import Contribution from '../../../model/Contribution';
import ContributionLevel from '../../../model/ContributionLevel';
import ProgrammingLanguage from '../../../model/ProgrammingLanguage';
import Project from '../../../model/Project';

export default {
  id: 'kipr-wombat',
  name: 'Wombat Robot Controller',
  contributionLevel: ContributionLevel.Minor,
  contributions: [{
    type: Contribution.Type.Programming,
    programmingLanguages: [
      ProgrammingLanguage.C,
      ProgrammingLanguage.CPlusPlus,
    ],
  }],
  description: '',
  roleId: 'kipr-tac-member',
} as Project;