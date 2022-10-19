export default <T extends { id: string; }>(items: T[]): { [id: string]: T } => items.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});