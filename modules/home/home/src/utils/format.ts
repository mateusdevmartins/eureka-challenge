import { format, parse } from 'date-fns';

export const getCurrentTier = (points: number) => {
  return points < 100
    ? 'BRONZE'
    : points >= 100 && points < 200
    ? 'SILVER'
    : 'GOLD';
};

export const getNextTier = (points: number) => {
  return points < 100
    ? 'Silver'
    : points >= 100 && points < 200
    ? 'Gold'
    : 'Platinum';
};

export const formatDate = (date: string) => {
  return format(parse(date, 'yyyy-MM-dd', new Date()), 'dd/MM/yyyy');
};
