const containsChar = (fieldName, fieldValue, chars) => {
  chars.forEach(char => {
    if (!fieldValue.includes(char)) {
      throw new Error(`${fieldName} field's value must include the character "${char}"`);
    }
  });
};

module.exports = {
  containsChar,
};
