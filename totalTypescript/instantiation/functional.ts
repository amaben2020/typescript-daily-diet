// Functional
function Plant(name: string, size: string, flowerColor: string) {
  let obj = {} as {
    name: string;
    size: string;
    flowerColor: string;
    water: () => void;
    repot: () => void;
  };
  obj.name = name;
  obj.size = size;
  obj.flowerColor = flowerColor;

  obj.water = function () {
    console.log("Water the " + this.name);
  };

  obj.repot = function () {
    console.log("Repotting");
  };

  return obj;
}

var daffodil = Plant("daffodil", "medium", "yellow");
console.log(daffodil.water());
