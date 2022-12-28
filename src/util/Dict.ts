type Dict<T> = { [key: string]: T };

namespace Dict {
  export const map = <T, U>(dict: Dict<T>, f: (value: T) => U): Dict<U> => {
    const ret: Dict<U> = {};
    for (const key in dict) ret[key] = f(dict[key]);
    return ret;
  };

  export const filterMap = <T, U>(dict: Dict<T>, f: (value: T) => U | undefined): Dict<U> => {
    const ret: Dict<U> = {};
    for (const key in dict) {
      const value = f(dict[key]);
      if (value !== undefined) ret[key] = value;
    }
    return ret;
  };

  export const toSet = <T>(dict: Dict<T>): Set<T> => {
    const ret = new Set<T>();
    for (const key in dict) ret.add(dict[key]);
    return ret;
  };

  export const toList = <T>(dict: Dict<T>): T[] => {
    const ret: T[] = [];
    for (const key in dict) ret.push(dict[key]);
    return ret;
  };

  export const union = <T>(a: Dict<T>, b: Dict<T>): Dict<T> => {
    const ret: Dict<T> = {};
    for (const key in a) ret[key] = a[key];
    for (const key in b) ret[key] = b[key];
    return ret;
  };

  export const relabel = <T>(dict: Dict<T>, f: (value: T, key: string) => string): Dict<T> => {
    const ret: Dict<T> = {};
    for (const key in dict) ret[f(dict[key], key)] = dict[key];
    return ret;
  };
}

export default Dict;