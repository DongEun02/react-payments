import type { DateError, MonthError, YearError } from '../types/errorTypes';

export function isMonthError(mode: DateError | MonthError | YearError | 'normal') {
  if (
    mode === 'emptyBoth' ||
    mode === 'emptyMonth' ||
    mode === 'notMonthRange' ||
    mode === 'notMonthNumber'
  ) {
    return true;
  }
  if (mode === 'normal' || mode === 'emptyYear' || mode === 'notYearNumber') {
    return false;
  }
}

export function isYearError(mode: DateError | MonthError | YearError | 'normal') {
  if (mode === 'emptyBoth' || mode === 'emptyYear' || mode === 'notYearNumber') {
    return true;
  }
  if (
    mode === 'normal' ||
    mode === 'emptyMonth' ||
    mode === 'notMonthRange' ||
    mode === 'notMonthNumber'
  ) {
    return false;
  }
}

export function isNotNumber<T extends string>(
  value: number,
  errorMode: T,
  setFunc: (mode: T) => void,
): boolean {
  if (isNaN(value)) {
    setFunc(errorMode);
    return true;
  }
  return false;
}
