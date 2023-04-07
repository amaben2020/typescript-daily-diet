let arr: any = [1, 2, 3, [4], 5, 6, [7]];

const sumTotal = (() => {
  return arr.flat().reduce((acc: any, cv: any) => {
    cv > 3 ? (acc += cv) : null;
    return acc;
  }, 0);
})();

console.log(sumTotal);
