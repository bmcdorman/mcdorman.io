import Contribution from '../../../model/Contribution';
import ContributionLevel from '../../../model/ContributionLevel';
import ProgrammingLanguage from '../../../model/ProgrammingLanguage';
import Project from '../../../model/Project';

// @ts-ignore
import description from 'bundle-text:./description.md';


export default {
  id: 'kipr-link',
  name: 'Link Robot Controller',
  contributionLevel: ContributionLevel.Critical,
  contributions: [{
    type: Contribution.Type.Programming,
    programmingLanguages: [
      ProgrammingLanguage.C,
      ProgrammingLanguage.CPlusPlus,
    ],
  }],
  description,
  roleIds: [ 'kipr-software-engineer' ],
  relatedProjectIds: [ 'kipr-wallaby', 'kipr-wombat', 'kipr-libwallaby' ],
} as Project;