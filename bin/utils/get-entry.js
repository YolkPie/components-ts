const glob = require('glob');
const path = require('path');

const getEntry = (type = 'js') => {
  let globPath = `src/components/*/index.${type}`;
  // (\/|\\\\) 这种写法是为了兼容 windows和 mac系统目录路径的不同写法
  let pathDir = `src(/|\\\\)(.*?)(/|\\\\)${type}`;
  let files = glob.sync(globPath);
  let dirname,
    entries = [];
  for (let i = 0; i < files.length; i++) {
    dirname = path.dirname(files[i]);
    entries.push(
      dirname.replace(new RegExp('^' + pathDir), '$2') + `/index.${type}`
    );
  }

  return entries;
};

module.exports = getEntry;
