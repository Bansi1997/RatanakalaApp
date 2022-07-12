export const capitalizeWord = word => {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
};
export const getUniqueValues = (tempArray, filter_key = 'label') => {
  const newArray = [];
  tempArray.forEach(obj => {
    if (!newArray.some(o => o[filter_key] === obj[filter_key])) {
      newArray.push({...obj});
    }
  });
  return newArray;
};
