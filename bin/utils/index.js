const formatList = (arr, type) => {
  return arr.map(item => {
    return item.replace(/\s/g, '').replace(type, '');
  });
};

const getArrList = (str, type) => {
  const arr = str.split('\n');
  return arr.filter(item => {
    const regex = new RegExp(`[${type}].*`);
    if (regex.test(item)) {
      return item !== undefined;
    }
  });
};

module.exports = {
  formatList,
  getArrList
};
