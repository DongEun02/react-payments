export type errorModeInfoType =
  | 'notNumber'
  | 'notExistBrand'
  | 'cardNumberCount'
  | 'emptyBoth'
  | 'emptyMonth'
  | 'yearCount'
  | 'notMonthRange'
  | 'cvcCount';

type errorModeType = {
  [key in errorModeInfoType]: string;
};

export const ERROR_MODE: errorModeType = {
  notNumber: '숫자만 입력 가능합니다',
  notExistBrand: '존재하는 카드 브랜드 번호가 아닙니다.',
  cardNumberCount: '각 카드 번호 입력칸의 숫자는 4자리여야 합니다.',
  emptyBoth: '월, 년도를 입력해주세요',
  emptyMonth: '월을 입력해주세요.',
  yearCount: '연도를 입력해주세요.',
  notMonthRange: '월 입력값은 1~12입니다.',
  cvcCount: 'CVC 번호는 3자리여야 합니다.',
};
