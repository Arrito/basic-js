const { NotImplementedError } = require('../extensions/index.js');

function renameFiles(names) {
  let nameCount = {};
  return names.map(name => {
    if (nameCount[name]) {
      let newName = `${name}(${nameCount[name]})`;
      while (nameCount[newName]) {
        nameCount[name]++;
        newName = `${name}(${nameCount[name]})`;
      }
      nameCount[newName] = 1;
      return newName;
    } else {
      nameCount[name] = 1;
      return name;
    }
  });
}

module.exports = {
  renameFiles
};
