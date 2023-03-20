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
      Skill.tool('Terminal'),
      Skill.tool('G Suite'),
      Skill.tool('Microsoft Office'),
      Skill.tool('GitHub'),
      Skill.tool('SSH'),
      Skill.library('Robot Operating System'),
      Skill.library('Standard Template Library'),
      Skill.library('BSD Sockets'),
      Skill.platform('Linux'),
      Skill.platform('macOS'),
      Skill.technique('Plugin Architectures'),
      Skill.technique('Serialization'),
    ],
    proficient: [
      Skill.programmingLanguage(ProgrammingLanguage.TypeScript),
      Skill.programmingLanguage(ProgrammingLanguage.JavaScript),
      Skill.programmingLanguage(ProgrammingLanguage.Html),
      Skill.programmingLanguage(ProgrammingLanguage.Css),
      Skill.library('React'),
      Skill.library('Qt'),
      Skill.library('Boost'),
      Skill.library('WebSockets'),
      Skill.library('express.js'),
      Skill.tool('Docker'),
      Skill.tool('NoSQL'),
      Skill.tool('node.js'),
      Skill.tool('Visual Studio Code'),
      Skill.platform('Windows'),
      Skill.platform('Embedded Linux'),
      Skill.technique('Agile'),
      Skill.technique('REST'),
      Skill.technique('Microservice Architectures'),
      Skill.technique('Parsing and Lexical Analysis'),
    ],
    familiar: [
      Skill.programmingLanguage(ProgrammingLanguage.Rust),
      Skill.programmingLanguage(ProgrammingLanguage.Python),
      Skill.programmingLanguage(ProgrammingLanguage.Java),
      Skill.programmingLanguage(ProgrammingLanguage.Latex),
      Skill.programmingLanguage(ProgrammingLanguage.ObjectiveC),
      Skill.programmingLanguage(ProgrammingLanguage.Qml),
      Skill.library('tokio'),
      Skill.library('OpenGL'),
      Skill.library('WebGL'),
      Skill.library('CUDA'),
      Skill.library('gRPC'),
      Skill.library('protobuf'),
      Skill.library('dbus'),
      Skill.library('AngularJS'),
      Skill.tool('Kubernetes'),
      Skill.tool('SQL'),
      Skill.tool('vim'),
      Skill.platform('Android'),
      Skill.platform('iOS'),
      Skill.platform('Bare Metal'),
      Skill.technique('Packet Analysis'),
    ],

  }
} as Resume;