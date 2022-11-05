import ProgrammingLanguageModel from './ProgrammingLanguage';

namespace Skill {
  export enum Type {
    ProgrammingLanguage = 'programming-language',
    Library = 'library',
    Platform = 'platform',
    Tool = 'tool',
  }

  export interface ProgrammingLanguage {
    type: Type.ProgrammingLanguage;
    programmingLanguage: ProgrammingLanguageModel;
  }

  export const programmingLanguage = (programmingLanguage: ProgrammingLanguageModel): ProgrammingLanguage => ({
    type: Type.ProgrammingLanguage,
    programmingLanguage,
  });

  export const isProgrammingLanguage = (skill: Skill): skill is ProgrammingLanguage => skill.type === Type.ProgrammingLanguage;

  export interface Library {
    type: Type.Library;
    library: string;
  }

  export const library = (library: string): Library => ({
    type: Type.Library,
    library,
  });

  export const isLibrary = (skill: Skill): skill is Library => skill.type === Type.Library;

  export interface Tool {
    type: Type.Tool;
    tool: string;
  }

  export const tool = (tool: string): Tool => ({
    type: Type.Tool,
    tool,
  });

  export const isTool = (skill: Skill): skill is Tool => skill.type === Type.Tool;

  export const name = (skill: Skill) => {
    switch (skill.type) {
      case Type.ProgrammingLanguage: return ProgrammingLanguageModel.name(skill.programmingLanguage);
      case Type.Library: return skill.library;
      case Type.Tool: return skill.tool;
    }
  };
}

type Skill = Skill.ProgrammingLanguage | Skill.Library | Skill.Tool;

export default Skill;