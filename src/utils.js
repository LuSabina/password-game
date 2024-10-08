export const checkIfNameIsValid = (name) => {
  let validName = name.trim();
  return validName.length > 1;
};
