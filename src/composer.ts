export const composer = (numbers: number[]) => {
  if (numbers.length === 0) {
    return "";
  }
  const result = [] as number[][];

  let currentLength = 1;
  result.push([numbers[0]]);
  numbers.slice(1).forEach((n) => {
    const nAsString = n.toString();
    if (nAsString.length > currentLength) {
      currentLength = nAsString.length;
      result.push([n]);
      return;
    }
    result[result.length - 1][1] = n;
  });
  return result
    .reduce((a, v) => {
      a.push(v.join("-"));
      return a;
    }, [] as string[])
    .join(",");
};
