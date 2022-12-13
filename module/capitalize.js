const capitalize = (string) => {
  string = string.split('');
  string[0] = string[0].toUpperCase();
  string = string.join('');
  return string;
};

module.exports = capitalize;
