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
  }, {
    type: 'linkedin',
    username: 'bmcdorman',
  }, {
    type: 'github',
    username: 'bmcdorman',
  }],
  skillGroups: [{
    title: 'Languages',
    skills: [
      Skill.programmingLanguage(ProgrammingLanguage.C),
      Skill.programmingLanguage(ProgrammingLanguage.CPlusPlus),
      Skill.programmingLanguage(ProgrammingLanguage.JavaScript),
      Skill.programmingLanguage(ProgrammingLanguage.TypeScript),
      Skill.programmingLanguage(ProgrammingLanguage.Python),
      Skill.programmingLanguage(ProgrammingLanguage.Rust),
    ],
  }, {
    title: 'Robotics & Simulation',
    skills: [
      Skill.library('Robot Operating System'),
      Skill.library('OpenGL'),
      Skill.library('Qt'),
      Skill.library('protobuf'),
      Skill.library('gRPC'),
      Skill.tool('CMake'),
    ],
  }, {
    title: 'Infrastructure',
    skills: [
      Skill.tool('Docker'),
      Skill.tool('Kubernetes'),
      Skill.tool('node.js'),
      Skill.library('React'),
      Skill.tool('Git'),
      Skill.platform('Linux'),
      Skill.platform('macOS'),
      Skill.platform('Embedded Linux'),
    ],
  }, {
    title: 'ML & Generative AI',
    skills: [
      Skill.library('CUDA'),
      Skill.competency('Agentic Workflows'),
      Skill.competency('Diffusion Models'),
      Skill.competency('GenAI'),
    ],
  }, {
    title: 'Leadership & Methods',
    skills: [
      Skill.competency('Technical Leadership'),
      Skill.competency('People Management'),
      Skill.competency('Agile'),
      Skill.competency('REST / APIs'),
      Skill.competency('Microservice Architectures'),
    ],
  }],
} as Resume;
