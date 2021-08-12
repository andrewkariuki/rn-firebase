const getKeyByValue = (object: any, value: any) =>
  Object.keys(object).find((key) => object[key] === value);

export default getKeyByValue;
