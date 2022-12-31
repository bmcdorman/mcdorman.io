enum ProgrammingLanguage {
  JavaScript = 'javascript',
  TypeScript = 'typescript',
  C = 'c',
  CPlusPlus = 'c++',
  Rust = 'rust',
  Html = 'html',
  Css = 'css',
  Python = 'python',
  Java = 'java',
  Latex = 'latex',
  ObjectiveC = 'objective-c',
  QtQuick = 'qtquick',
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
      case ProgrammingLanguage.Html:
        return 'HTML';
      case ProgrammingLanguage.Css:
        return 'CSS';
      case ProgrammingLanguage.Python:
        return 'Python';
      case ProgrammingLanguage.Java:
        return 'Java';
      case ProgrammingLanguage.Latex:
        return 'LaTeX';
      case ProgrammingLanguage.ObjectiveC:
        return 'Objective-C';
      case ProgrammingLanguage.QtQuick:
        return 'Qt Quick';
    }
  };
}

export default ProgrammingLanguage;