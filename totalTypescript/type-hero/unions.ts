type TVehicle = "mercedes" | "toyota" | "volvo";

type TReturn = { reliability: string };

const renderVehicle = (vehicle: TVehicle): TReturn => {
  switch (vehicle) {
    case "toyota":
      return {
        reliability: "100%",
      };
    case "mercedes":
      return {
        reliability: "60%",
      };

    case "volvo":
      return {
        reliability: "70%",
      };

    default:
      throw new Error("There must be a vehicle");
  }
};

console.log(renderVehicle("mercedes"));
