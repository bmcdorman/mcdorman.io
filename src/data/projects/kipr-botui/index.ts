import Contribution from '../../../model/Contribution';
import ContributionLevel from '../../../model/ContributionLevel';
import ProgrammingLanguage from '../../../model/ProgrammingLanguage';
import Project from '../../../model/Project';

// @ts-ignore
import description from 'bundle-text:./description.md';


export default {
  id: 'kipr-botui',
  name: 'botui',
  contributionLevel: ContributionLevel.Critical,
  contributions: [{
    type: Contribution.Type.Programming,
    programmingLanguages: [
      ProgrammingLanguage.C,
      ProgrammingLanguage.CPlusPlus,
      ProgrammingLanguage.JavaScript,
    ],
  }],
  description,
  roleIds: [ 'kipr-software-engineer', 'kipr-lead-software-engineer' ],
  relatedProjectIds: [ 'kipr-wallaby', 'kipr-libwallaby', 'kipr-wombat' ],
} as Project;