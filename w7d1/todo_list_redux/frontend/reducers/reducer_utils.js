export const convertArrayToObject = function (arr) {
  const result = {};
  for (var i = 0; i < arr.length; i++) {
    result[arr[i].id] = arr[i];
  }
  return result;
};
