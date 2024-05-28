export const isNonNegativeInteger = (str: string) => {
  const regex = /^(0|[1-9]\d*)$/;
  return regex.test(str);
};
