import Contribution from '../../../model/Contribution';
import ContributionLevel from '../../../model/ContributionLevel';
import ProgrammingLanguage from '../../../model/ProgrammingLanguage';
import Project from '../../../model/Project';

// @ts-ignore
import description from 'bundle-text:./description.md';


export default {
  id: 'kipr-pcompiler',
  name: 'pcompiler',
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
  relatedProjectIds: [ 'kipr-wallaby', 'kipr-wombat', 'kipr-link', 'kipr-libwallaby' ],
} as Project;