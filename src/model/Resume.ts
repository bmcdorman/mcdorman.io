import Contact from './Contact';
import Skill from './Skill';

interface Resume {
  about: string;
  contacts: Contact[];
  roleIds: string[];
  skills: {
    expert: Skill[];
    proficient: Skill[];
    familiar: Skill[];
  };
}

export default Resume;