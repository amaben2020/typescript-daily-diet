"use strict";
var StarShipObject = {
    name: 'Starship',
    enableHyperDrive: false
};
//Partial: makes all the properties optional for Typescript
var updateStarship = function (name, starship, key) { return starship[key] = name; };
console.log(updateStarship('amaben', StarShipObject, 'name'));
console.log(StarShipObject);
//Readonly: makes all the properties optional for Typescript
// const updateStarship2 = (name: string, starship: Readonly<StarShip>, key: 'name' ) =>  starship[key] = name
// console.log(updateStarship2('amaben', StarShipObject, 'name'))
// console.log(StarShipObject)
//Maps and records
var starships = {
    Starship: {
        name: 'Starship',
        enableHyperDrive: false
    },
    MillenniumFalcon: {
        name: 'Millennium Falcon',
        enableHyperDrive: true
    }
};
console.log(starships.Starship.enableHyperDrive);
//# sourceMappingURL=record.js.map