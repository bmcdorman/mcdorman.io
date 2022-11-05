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
    email: 'braden@mcdorman.io',
  }, {
    type: 'phone',
    phone: '+1 (405) 795-1800',
  }],
  skills: {
    expert: [
      Skill.programmingLanguage(ProgrammingLanguage.C),
      Skill.programmingLanguage(ProgrammingLanguage.CPlusPlus),
      Skill.tool('Git'),
      Skill.tool('CMake'),
      Skill.library('Robot Operating System'),
      Skill.platform('Linux'),
      Skill.platform('macOS'),
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
      Skill.tool('node.js'),
      Skill.platform('Windows'),
      Skill.platform('Embedded Linux'),
    ],
    familiar: [
      Skill.programmingLanguage(ProgrammingLanguage.Rust),
      Skill.programmingLanguage(ProgrammingLanguage.Python),
      Skill.programmingLanguage(ProgrammingLanguage.Java),
      Skill.programmingLanguage(ProgrammingLanguage.Latex),
      Skill.programmingLanguage(ProgrammingLanguage.ObjectiveC),
      Skill.library('tokio'),
      Skill.library('OpenGL'),
      Skill.library('CUDA'),
      Skill.tool('Kubernetes'),
      Skill.platform('Android'),
      Skill.platform('iOS'),
    ],

  }
} as Resume;