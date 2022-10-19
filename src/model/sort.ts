export const ascendingStartDate = <T extends { startDate: string; }>(a: T, b: T): number => {
  if (a.startDate < b.startDate) return -1;
  if (a.startDate > b.startDate) return 1;
  return 0;
};

export const descendingStartDate = <T extends { startDate: string; }>(a: T, b: T): number => {
  if (a.startDate < b.startDate) return 1;
  if (a.startDate > b.startDate) return -1;
  return 0;
};

export const descending = <T extends { startDate: string; endDate?: string; }>(a: T, b: T): number => {
  if (!a.endDate && !b.endDate) return descendingStartDate(a, b);
  if (!a.endDate && b.endDate) return -1;
  if (a.endDate && !b.endDate) return 1;
  if (a.endDate! > b.endDate!) return -1;
  if (a.endDate! < b.endDate!) return 1;
  return 0;
};