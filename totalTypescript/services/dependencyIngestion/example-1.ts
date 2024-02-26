//DIP works based on the principle that a class depends on another classes's method

class ViewMe {
  private viewOtherClass;
  constructor(otherClass: (a: number, b: number) => number) {
    this.viewOtherClass = otherClass;
  }

  getV(a: number, b: number) {
    return this.viewOtherClass(a, b);
  }
}

class SpecialClass {
  viewClass(a: number, b: number) {
    return a + b;
  }
}

// the method needed by another class
const viewCombinedClasses = new ViewMe(new SpecialClass().viewClass);

console.log("Sixty Three", viewCombinedClasses.getV(30, 33));
