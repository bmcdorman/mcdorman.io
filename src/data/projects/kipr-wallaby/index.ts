import Contribution from '../../../model/Contribution';
import ContributionLevel from '../../../model/ContributionLevel';
import ProgrammingLanguage from '../../../model/ProgrammingLanguage';
import Project from '../../../model/Project';

export default {
  id: 'kipr-wallaby',
  name: 'Wallaby Robot Controller',
  contributionLevel: ContributionLevel.Critical,
  contributions: [{
    type: Contribution.Type.Programming,
    programmingLanguages: [
      ProgrammingLanguage.C,
      ProgrammingLanguage.CPlusPlus,
      ProgrammingLanguage.JavaScript
    ],
  }],
  description: '',
  roleId: 'kipr-lead-software-engineer',
} as Project;