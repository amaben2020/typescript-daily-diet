type Loggable = {
  log: () => void;
};
type Serializable = {
  serialize: () => void;
};

type Logger = Loggable & Serializable;

class ConsoleLogger implements Loggable {
  log() {
    console.log("Logging to console...");
  }
}

class FileLogger implements Loggable, Serializable {
  log() {
    console.log("Logging to file...");
  }

  serialize() {
    return "Serialized log data";
  }
}

const fileLog: Logger = new FileLogger();
