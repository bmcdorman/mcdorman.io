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
      Skill.programmingLanguage(ProgrammingLanguage.JavaScript),
      Skill.programmingLanguage(ProgrammingLanguage.Html),
      Skill.tool('Git'),
      Skill.tool('CMake'),
      Skill.tool('GSuite'),
      Skill.tool('Microsoft Office'),
      Skill.platform('Linux'),
      Skill.platform('macOS'),
      Skill.competency('Technical Leadership'),
    ],
    proficient: [
      Skill.programmingLanguage(ProgrammingLanguage.TypeScript),
      Skill.programmingLanguage(ProgrammingLanguage.Python),
      Skill.programmingLanguage(ProgrammingLanguage.Css),
      Skill.library('React'),
      Skill.library('Robot Operating System'),
      Skill.library('protobuf'),
      Skill.library('Qt'),
      Skill.tool('Docker'),
      Skill.tool('NoSQL'),
      Skill.tool('node.js'),
      Skill.tool('Kubernetes'),
      Skill.platform('Embedded Linux'),
      Skill.competency('People Management'),
      Skill.competency('Agile'),
      Skill.competency('REST / APIs'),
      Skill.competency('Microservice Architectures'),
    ],
    familiar: [
      Skill.programmingLanguage(ProgrammingLanguage.Rust),
      Skill.programmingLanguage(ProgrammingLanguage.Latex),
      Skill.library('gRPC'),
      Skill.library('CUDA'),
      Skill.library('OpenGL'),
      Skill.competency('Agentic Workflows'),
      Skill.competency('Diffusion Models'),
      Skill.competency('GenAI'),
    ],
  }
} as Resume;
