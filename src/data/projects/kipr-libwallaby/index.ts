import Contribution from '../../../model/Contribution';
import ContributionLevel from '../../../model/ContributionLevel';
import ProgrammingLanguage from '../../../model/ProgrammingLanguage';
import Project from '../../../model/Project';

// @ts-ignore
import description from 'bundle-text:./description.md';

export default {
  id: 'kipr-libwallaby',
  name: 'libwallaby',
  contributionLevel: ContributionLevel.Critical,
  contributions: [{
    type: Contribution.Type.Programming,
    programmingLanguages: [
      ProgrammingLanguage.C,
      ProgrammingLanguage.CPlusPlus,
    ],
  }],
  description,
  roleIds: [ 'kipr-software-engineer', 'kipr-lead-software-engineer' ],
} as Project;