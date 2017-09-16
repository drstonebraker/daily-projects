export const convertItemsArrayToObject = (items) => {
  const result = {};
  for (var i = 0; i < items.length; i++) {
    const item = items[i];
    result[item.id] = item;
  }
  return result;
};
