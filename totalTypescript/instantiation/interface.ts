// https://www.codecademy.com/resources/docs/typescript/classes

interface Speaker {
  speak(): string;
}

class SpeechGiver implements Speaker {
  // treat them as parameters
  speech: string;
  constructor(speech: string) {
    this.speech = speech;
  }

  increaseEmphasis() {
    this.speech += "!";
  }

  speak() {
    return this.speech;
  }
}
