// https://theprimeagen.github.io/fem-algos/lessons/algorithms-and-time-space-complexity/time-and-space-complexity

// O(N) : number of operations based on the input i.e 'Amsm' means 4 iterations
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    const charCode = n.charCodeAt(i);
    // Capital E
    if (charCode === 69) {
      return sum;
    }

    sum += charCode;
  }

  return sum;
}


//O(N^2)
function sum_char_codess(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    for (let j = 0; j < n.length; ++j) {
      const charCode = n.charCodeAt(i)
      sum += charCode;
    }
  }

  return sum;
}


// nested forloop O(N^2)
let arr = [
  [1, 2], [3, 4], [5, 6]
];

// for (let i = 0; i < arr.length; ++i) {
//   for (let j = 0; j < arr[i].length; ++j) {
//     console.log(arr[i][j])
//   }
// }

// first iteration: [1,2] [3,4] [5,6]
// second iteration: 0: 12 , 1: 3,4 , 2: 5,6


// O(N)
const functionalWay = (array: any[]): number[] => {
  return array.reduce((a: number[], b: number[]) => {
    return [...a, ...b]
  }, [])

}
console.log(functionalWay(arr))

// when mapping, its an object you're working on