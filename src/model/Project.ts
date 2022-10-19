import Contribution from './Contribution';
import ContributionLevel from './ContributionLevel';
import ProgrammingLanguage from './ProgrammingLanguage';

interface Project {
  id: string;
  name: string;
  roleIds?: string[];
  description?: string;
  relatedProjectIds?: string[];
  contributions?: Contribution[];
  contributionLevel?: ContributionLevel;
  programmingLanguages?: ProgrammingLanguage[];
}

export default Project;