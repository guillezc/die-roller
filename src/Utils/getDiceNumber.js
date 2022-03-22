export const getDiceNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};

export const getMaxKeyNumber = obj => {
  var arr = Object.keys(obj).map(key => obj[key]);
  const maxValue = Math.max(...arr);
  return parseInt(Object.keys(obj).find(key => obj[key] === maxValue));
};
