// signature: put <> before you pass down parameters to accept type params

type TP = {
  name: string
  age: number
}

class Logger<T> {
  log(items: Array<T>, callback: (i: T) => void) {
    items.forEach((item) => {
      callback(item);
    });
  }
}


const log = new Logger<TP>().log([{ name: 'a', age: 22 }], (item) => console.log(item));

class Student implements Logger {
  name = "string"
}
