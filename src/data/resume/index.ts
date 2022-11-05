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
    expert: [
      Skill.programmingLanguage(ProgrammingLanguage.C),
      Skill.programmingLanguage(ProgrammingLanguage.CPlusPlus),
      Skill.tool('Git'),
      Skill.tool('CMake'),
      Skill.library('Robot Operating System'),
    ],
    proficient: [
      Skill.programmingLanguage(ProgrammingLanguage.TypeScript),
      Skill.programmingLanguage(ProgrammingLanguage.JavaScript),
      Skill.programmingLanguage(ProgrammingLanguage.Html),
      Skill.programmingLanguage(ProgrammingLanguage.Css),
      Skill.library('React'),
      Skill.library('Qt'),
      Skill.tool('Docker'),
      Skill.tool('NoSQL'),
      Skill.tool('Sockets'),
    ],
    familiar: [
      Skill.programmingLanguage(ProgrammingLanguage.Rust),
      Skill.programmingLanguage(ProgrammingLanguage.Python),
      Skill.programmingLanguage(ProgrammingLanguage.Java),
      Skill.programmingLanguage(ProgrammingLanguage.Latex),
      Skill.library('tokio'),
      Skill.library('OpenGL'),
      Skill.library('CUDA'),
      Skill.tool('Kubernetes'),
    ],

  }
} as Resume;