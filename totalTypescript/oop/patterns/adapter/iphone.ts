interface ILP {
  useLighteningPort: () => string;
}

interface UUP {
  useUSBPort: () => string;
}

class IPhone13 implements ILP {
  useLighteningPort() {
    return "Using lightning port ";
  }
}
class Galaxy implements UUP {
  useUSBPort() {
    return "Using lightning port ";
  }
}

class AdapterEurope extends Galaxy {
  iphone13: ILP;
  constructor(iphone13: ILP) {
    super();
    this.iphone13 = iphone13;
  }

  useUSBPort() {
    console.log("Want to use micro USB, converting...");
    return this.iphone13.useLighteningPort();
  }
}

const ltousb = new AdapterEurope(new IPhone13());
console.log(ltousb.useUSBPort());
