import ProgrammingLanguageModel from './ProgrammingLanguage';

namespace Skill {
  export enum Type {
    ProgrammingLanguage = 'programming-language',
    Platform = 'platform',
    Tool = 'tool',
  }

  export interface ProgrammingLanguage {
    type: Type.ProgrammingLanguage;
    programmingLanguage: ProgrammingLanguageModel;
  }

  export const isProgrammingLanguage = (skill: Skill): skill is ProgrammingLanguage => skill.type === Type.ProgrammingLanguage;
}

type Skill = Skill.ProgrammingLanguage;

export default Skill;