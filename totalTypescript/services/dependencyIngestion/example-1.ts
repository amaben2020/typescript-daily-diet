//DIP works based on the principle that a class depends on another classes's method

class ViewMe {
  viewOtherClass;
  constructor(otherClass: any) {
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

const viewCombinedClasses = new ViewMe(new SpecialClass().viewClass);

console.log("Sixty Three", viewCombinedClasses.getV(30, 33));
