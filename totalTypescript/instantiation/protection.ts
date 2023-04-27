// public (default): anybody may access that member, anywhere.
// protected: only the class or its derived classes may access that member.
// private: only the class itself may access that member.

class Base {
  // These two are functionally equivalent
  first = "";
  public second = "";

  protected third = "";

  private fourth = "";
  #fifth = "";
}

// The Derived class uses the extends keyword to become a child of the Base class. In the example below, a .test() method is used to borrow from members of the parent Base class

class Derived extends Base {
  test() {
    this.first; // Ok: public
    this.second; // Ok: public

    this.third; // Ok: protected

    this.fourth;
    /*
    Error: Property 'fourth' is private
    and only accessible within class 'Base'.
    */

    this.fifth;
    /*
    Error: Property '#fifth' is not accessible outside
    class 'Base' because it has a private identifier.
    */
  }
}

const derived = new Derived();
