const getErrMsg = (field: string, char: string): string =>
  `${field} field must include "${char}"`;

const containsChar = (field: string, char: string): string =>
  `${field} field's value must include the character "${char}"`;

export { getErrMsg, containsChar };
