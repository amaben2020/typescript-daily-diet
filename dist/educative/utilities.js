"use strict";
var StarShipObject = {
    name: "Starship",
    enableHyperDrive: false,
};
//Partial: makes all the properties optional for Typescript
var updateStarship = function (name, starship, key) { return (starship[key] = name); };
console.log(updateStarship("amaben", StarShipObject, "name"));
console.log(StarShipObject);
//Partial: makes all the properties optional for Typescript
// const updateStarship2 = (name: string, starship: Readonly<StarShip>, key: 'name' ) =>  starship[key] = name
// console.log(updateStarship2('amaben', StarShipObject, 'name'))
// console.log(StarShipObject)
//Maps and records
var starships = {
    Starship: {
        name: "Starship",
        enableHyperDrive: false,
    },
    MillenniumFalcon: {
        name: "Millennium Falcon",
        enableHyperDrive: true,
    },
};
console.log(starships.Starship.enableHyperDrive);
var getNamesFromStarships = function (starships) {
    for (var key in starships) {
        if (key === "name") {
            return starships[key];
        }
    }
};
console.log("res", getNamesFromStarships(StarShipObject));
var BenDrink;
BenDrink = "coke";
var JaneDrink;
JaneDrink = "7up";
//returnType
function paintStarship(color) {
    return color;
}
console.log("COLOR", paintStarship("blue"));
var customerData = [
    {
        id: 16641,
        name: "Kevin",
        lastname: "Parra",
        status: "active",
        files: [
            {
                filename: "Resume-Kevin-Parra.pdf",
                file_uploaded: "2022-05-05 01:00:37"
            }
        ],
    }
];
//# sourceMappingURL=utilities.js.map