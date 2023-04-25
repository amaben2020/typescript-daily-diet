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
    return this.name;
  }

  repot() {
    console.log("Repot the plant" + " " + this.size + " " + this.water());
  }
}

const daffodill = new Plants("daffodill", "medium", "yellow");
console.log(daffodill.water()); // Water the daffodill
console.log(daffodill.repot());
