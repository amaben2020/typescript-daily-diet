type Ref = {
  [key: string]: string
}

const ref: Ref = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

const morseCode = (morse: string) => {
  const codes = morse.split("   ")
  const result = codes.map(item => {
    return item.split(" ").map(elem => ref[elem]).join(" ")
  })
  return result.join("  ")
}

console.log(morseCode('.-- --- .-. -..   .-- --- .-. -..   .-- --- .-. -..   .-. -..'))

const loggers = (props: string) => console.log(props)

const withUser = (fx, 'id') => {

  // do crazy stuff

  return () => {

  }
}