const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const daySuffix = (day: number) => {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  };
}

export const toHumanMonthYear = (date: Date): string => {
  const adjustedDate = new Date(date.getTime() + 12 * 60 * 60 * 1000);
  const month = MONTHS[adjustedDate.getMonth()];
  const year = adjustedDate.getFullYear();
  return `${month} ${year}`;
};

export const toCompactHumanMonthYear = (date: Date): string => {
  const adjustedDate = new Date(date.getTime() + 12 * 60 * 60 * 1000);
  const month = MONTHS[adjustedDate.getMonth()].slice(0, 3);
  const year = adjustedDate.getFullYear();
  return `${month} ${year}`;
};

export const toNumericalMonthYear = (date: Date): string => {
  const adjustedDate = new Date(date.getTime() + 12 * 60 * 60 * 1000);
  const month = adjustedDate.getMonth() + 1;
  const year = adjustedDate.getFullYear();
  return `${month}/${year}`;
};