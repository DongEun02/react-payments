export type errorModeInfoType = 'notNumber' | 'notExistBrand' | 'cardNumberCount';

type errorModeType = {
  [key in errorModeInfoType]: string;
};

export const ERROR_MODE: errorModeType = {
  notNumber: '숫자만 입력 가능합니다',
  notExistBrand: '존재하는 카드 브랜드 번호가 아닙니다.',
  cardNumberCount: '각 카드 번호 입력칸의 숫자는 4자리여야 합니다.',
};
