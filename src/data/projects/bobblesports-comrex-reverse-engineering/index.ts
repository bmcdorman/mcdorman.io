// @ts-ignore
import description from 'bundle-text:./description.md';
import Contribution from '../../../model/Contribution';
import ContributionLevel from '../../../model/ContributionLevel';
import ProgrammingLanguage from '../../../model/ProgrammingLanguage';
import Project from '../../../model/Project';

export default {
  id: 'bobblesports-comrex-reverse-engineering',
  name: 'COMREX Audio Protocol Reverse Engineering',
  companyId: 'bobblesports',
  roleId: 'bobblesports-advisor',
  contributionLevel: ContributionLevel.Critical,
  contributions: [{
    type: Contribution.Type.Programming,
    programmingLanguages: [ ProgrammingLanguage.Rust ],
  }],
  description,
} as Project;