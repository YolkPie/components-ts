const glob = require('glob');

const getBundled = () => {
  const globPath = `dist/build/*.js`;
  // (\/|\\\\) 这种写法是为了兼容 windows和 mac系统目录路径的不同写法
  const files = glob.sync(globPath);
  const entries = [];
  for (let i = 0; i < files.length; i++) {
    entries.push(files[i].split('/')[2].split('.')[0]);
  }

  return entries;
};

module.exports = getBundled;
