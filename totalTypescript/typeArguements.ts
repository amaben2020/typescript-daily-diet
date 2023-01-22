const guitarists: Set<string> = new Set();

guitarists.add("Jimi Hendrix");
guitarists.add("Eric Clapton");

const guitaristsAsArray = Array.from(guitarists);
const guitaristsAsObject = guitarists

console.log(guitaristsAsArray)
console.log(guitaristsAsObject.forEach(elem => {
  console.log(elem);
}))

class SSet {
  value: string | number;
  constructor(value: string | number) {
    this.value = value
  }

  getter() {
    return this.value
  }

  setter(text: string) {
    return this.value + "" + 'Welcome' + " " + text
  }

}

const instance = new SSet("Jimi Hendrix").setter("Paris")


console.log(instance)