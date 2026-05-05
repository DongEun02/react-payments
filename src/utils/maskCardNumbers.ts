export function maskCardNumbers(cardNumbers: string[]): string[] {
  return cardNumbers.map((cardNumber, index) => {
    if (index < 2) {
      return cardNumber;
    }

    return '·'.repeat(cardNumber.length);
  });
}
