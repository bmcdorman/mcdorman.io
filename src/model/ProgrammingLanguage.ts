enum ProgrammingLanguage {
  JavaScript = 'javascript',
  TypeScript = 'typescript',
  C = 'c',
  CPlusPlus = 'c++',
  Rust = 'rust',
}

namespace ProgrammingLanguage {
  export const name = (programmingLanguage: ProgrammingLanguage): string => {
    switch (programmingLanguage) {
      case ProgrammingLanguage.JavaScript:
        return 'JavaScript';
      case ProgrammingLanguage.TypeScript:
        return 'TypeScript';
      case ProgrammingLanguage.C:
        return 'C';
      case ProgrammingLanguage.CPlusPlus:
        return 'C++';
      case ProgrammingLanguage.Rust:
        return 'Rust';
    }
  };
}

export default ProgrammingLanguage;