import Contact from './Contact';
import Skill from './Skill';

interface Resume {
  about: string;
  contacts: Contact[];
  roleIds: string[];
  skillGroups: {
    title: string;
    skills: Skill[];
  }[];
}

export default Resume;
