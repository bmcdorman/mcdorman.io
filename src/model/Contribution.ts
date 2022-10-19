import ProgrammingLanguage from './ProgrammingLanguage';

namespace Contribution {
  export enum Type {
    Programming = 'programming',
  }

  export interface Programming {
    type: Type.Programming;
    programmingLanguages: ProgrammingLanguage[];
  }
}

type Contribution = Contribution.Programming;

export default Contribution;