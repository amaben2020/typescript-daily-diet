type TPlants = {
  size: string;
  flowerColor: "yellow" | "red";
};

class Plants {
  public name: string;
  public size: string;
  public flowerColor: string;

  constructor(name: string, size: string, flowerColor: "yellow" | "red") {
    this.size = size;
    this.flowerColor = flowerColor;
    this.name = name;
  }

  water() {
    console.log("Water the " + this.name);
  }

  repot() {
    console.log("Repot the plant");
  }
}

const daffodill = new Plants("daffodill", "medium", "yellow");
console.log(daffodill.water()); // Water the daffodill
