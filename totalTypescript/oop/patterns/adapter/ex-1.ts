class Target1 {
  public logRequest() {
    return "Target: The default target's behavior.";
  }
}

// only used by the adapter
class Adaptee1 {
  public formatLogRequest(string: string) {
    return string.split("").reverse().join("");
  }
}

/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 */

class Adapter1 extends Target1 {
  formatReq: (s: string) => string;
  constructor(formatLogRequest: (s: string) => string) {
    super();
    this.formatReq = formatLogRequest;
  }

  public logger(): string {
    console.log("formatReq", this.formatReq);
    return this.formatReq(this.logRequest());
  }
}

const adaptee1 = new Adaptee1();

const adapter1 = new Adapter1(adaptee1.formatLogRequest);
console.log(adapter1.logger());
