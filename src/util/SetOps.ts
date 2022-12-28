namespace SetOps {
  export const union = <T>(a: Set<T>, b: Set<T>): Set<T> => {
    const ret = new Set<T>(a);
    for (const item of b) ret.add(item);
    return ret;
  };
}

export default SetOps;