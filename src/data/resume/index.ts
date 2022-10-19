import ProgrammingLanguage from '../../model/ProgrammingLanguage';
import Resume from '../../model/Resume';
import Skill from '../../model/Skill';

// @ts-ignore
import about from 'bundle-text:./about.md';

import roles from '../roles';

export default {
  about,
  roleIds: Object.keys(roles),
  contacts: [{
    type: 'email',
    email: 'bmcdorman@gmail.com',
  }, {
    type: 'phone',
    phone: '405-795-1800',
  }],
  skills: {
    expert: [{
      type: Skill.Type.ProgrammingLanguage,
      programmingLanguage: ProgrammingLanguage.C
    }, {
      type: Skill.Type.ProgrammingLanguage,
      programmingLanguage: ProgrammingLanguage.CPlusPlus
    }, {
      type: Skill.Type.ProgrammingLanguage,
      programmingLanguage: ProgrammingLanguage.JavaScript
    }, , {
      type: Skill.Type.ProgrammingLanguage,
      programmingLanguage: ProgrammingLanguage.TypeScript
    }, {
      type: Skill.Type.ProgrammingLanguage,
      programmingLanguage: ProgrammingLanguage.Rust
    }],
  }
} as Resume;