/**
 * Create a promise that resolves after some time
 * @param n number of milliseconds before promise resolves
 */
function timeout(n: number) {
  return new Promise((res) => setTimeout(res, n));
}

/**
 * Add three numbers
 * @param a first number
 * @param b second
 */
export async function addNumbers(a: number, b: number) {
  await timeout(500);
  return a + b;
}

//== Run the program ==//
(async () => {
  console.log(await addNumbers(3, 4));
})();

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
    reject("The rejected promise");
  }, 300);
});

promise1
  .then((value) => {
    console.log(value);
    // expected output: "foo"
  })
  .catch((error) => {
    console.log(error);
    // expected output: "The rejected promise"
  });

console.log(promise1);
// expected output: [object Promise]

// between 500 and 1000
const RANDOM_WAIT_TIME = Math.round(Math.random() * 500) + 500;

let startTime = new Date();
let endTime;

setTimeout(() => {
  endTime = 0;
  endTime = new Date();
}, RANDOM_WAIT_TIME);
