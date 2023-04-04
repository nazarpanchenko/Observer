const getErrMsg = (field: string, char: string): string =>
  `${field} field must include "${char}"`;

const containsChar = (fieldName: string, fieldValue: string, chars: string[]): void => {
  chars.forEach((char: string) => {
    if (!fieldValue.includes(char)) {
      throw new Error(`${fieldName} field's value must include the character "${char}"`);
    }
  });
};

export { getErrMsg, containsChar };
