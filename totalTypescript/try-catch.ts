const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e) {
    if (e instanceof Error) {
      return e.message;
    }
  }
};

// coercing
// } catch (e) {
//   return (e as Error).message;
// }

console.log(tryCatchDemo("succeed"));

const userInformation = {
  name: "Ben",
};

const userInfoPromise = new Promise((resolve, reject) => {
  if (userInformation) {
    resolve(userInformation);
  } else {
    reject(new Error(" No user information available"));
  }
});

interface UserInformation {
  name: string;
}

const showUserInformation = async () => {
  try {
    const data = await userInfoPromise;
  } catch (error) {
    if (error instanceof Error) {
      console.log("error");
    }
  }
};

console.log(showUserInformation());

const createCache2 = () => {
  const cache: Record<string, string> = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

console.log(createCache());

// if the function has been called, return the value of the cache key
const logger = (param: number) => {
  return param;
};

const memoize = (fn: (args: number) => number) => {
  const cache: Record<number, number> = {};
  return (args: number) => {
    const result = fn(args);
    if (!cache[args]) {
      console.log("Assignment");
      const value = (cache[args] = result);
      return value;
    } else {
      console.log("retrieval");
      return cache[args];
    }
  };
};

console.log(memoize(logger)(13));
console.log(memoize(logger)(3));
console.log(memoize(logger)(13));
