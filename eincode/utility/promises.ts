//pending: the dishwasher is still running, not complete or completed.
//error: no soap //completed: dish washed
//https://www.codecademy.com/courses/learn-intermediate-javascript/lessons/promises/exercises/constructing-promises

//https://javascript.info/promise-basics#:~:text=The%20constructor%20syntax%20for%20a,created%2C%20the%20executor%20runs%20automatically.

const executorFunction = (resolve: any, reject: any) => { };
const myFirstPromise = new Promise(executorFunction);

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
function myExecutor(resolve: any, reject: any) {
  if (inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.')
  } else {
    reject('That item is sold out.')
  }
}

function orderSunglasses() {
  return new Promise(myExecutor);
}

const orderPromise = orderSunglasses();

const executorFunction2 = (resolve: any, reject: any) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
}
const promise1 = new Promise(executorFunction2);

promise1.then((value) => {
  console.log(value);
  // expected output: "foo"
});

console.log(promise1);
// expected output: [object Promise]

const delay = (time: number): Promise<void> => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
console.log('delay function', delay(300))

let prom = new Promise((resolve, reject) => {
  if (2 < 1) {
    resolve("Yeah")
  }
  return reject("Sorry")
}).then(RES => (
  console.log(RES)
)).catch(err => console.error(err))

let promise = new Promise(function (resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);
});

//finally: The idea of finally is to set up a handler for performing cleanup/finalizing after the previous operations are complete.

const data = [{ name: "Ben" }]
//This mimicks the API request that takes time 
const promiser = new Promise((resolve, reject) => {
  resolve("Answer") // The second call to resolve is ignored
  if (data) {
    resolve(data.map(e => console.log(e)))
  }
  reject("Error")
})

const loadData = async () => {

  try {
    const info = await promiser

    console.log(info)
  } catch (error) {
    console.log(error)
  }
}
console.log(loadData())

// The built-in function setTimeout uses callbacks. Create a promise-based alternative.

function delay3(ms: number): Promise<unknown> {

  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('runs after 3 seconds'));

const runTimeout = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"), 1000)
  })
}
const val = runTimeout().then(v => console.log(v))


//Power of promises
function loadScript(src: any) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));
    document.head.append(script);
  });
}
const loadedScript = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

loadedScript.then(
  //@ts-ignore
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);

promise.then(script => alert('Another handler...'));




// callback function
function loadScript2(src: any, callback: any) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}


const inventory2 = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

const inventoryInfo = new Promise((resolve, reject) => {
  if (inventory2.sunglasses) {
    resolve(inventory2.sunglasses = 2000)
  }
  reject("Impossible to load inventory")
})

const dataInfo = inventoryInfo.then((inventory) => {
  console.log(inventory)
}).catch((error) => {
  console.log(error)
})

console.log(dataInfo)