const stringLength = (string) => {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  }
  return `${string} is longer or less than the required length`;
};

module.exports = stringLength;
