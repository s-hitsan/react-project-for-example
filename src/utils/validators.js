export const textareaValidator = (maxLenght) => value => {
  if (!value) return 'Field is required';
  else if (value.length > maxLenght) return `Max length ${maxLenght}`;
  else return undefined
}
