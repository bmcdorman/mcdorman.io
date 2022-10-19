import Contribution from '../../../model/Contribution';
import ContributionLevel from '../../../model/ContributionLevel';
import ProgrammingLanguage from '../../../model/ProgrammingLanguage';
import Project from '../../../model/Project';

export default {
  id: 'kipr-link',
  name: 'Link Robot Controller',
  contributionLevel: ContributionLevel.Critical,
  contributions: [{
    type: Contribution.Type.Programming,
    programmingLanguages: [
      ProgrammingLanguage.C,
      ProgrammingLanguage.CPlusPlus,
      ProgrammingLanguage.JavaScript,
    ],
  }],
  description: '',
  roleIds: [ 'kipr-software-engineer' ],
  relatedProjectIds: [ 'kipr-wallaby', 'kipr-libwallaby' ],
} as Project;