// just playing around records and mapped types
// https://tc39.es/proposal-record-tuple/tutorial/
type TKitchen = {
  [key: string]: [string, string, string] | number | boolean | "white";
};
type THouseForSale = Record<
  string,
  | boolean
  | never
  | number
  | TKitchen
  | {
      amenities: {
        couch: ["large" | "small", { dimensions: [number, number] }][];
      }[];
    }
>;

const houseForSale = {
  bath: true,
  bedrooms: 4,
  user: {},
  kitchen: {
    amenities: ["oven", "stove", "washer"],
    area: 20,
    wallColor: "white",
    "nice.oven": true,
  },
  livingroom: {
    amenities: [
      {
        couch: [
          ["large", { dimensions: [20, 20] }],
          ["small", { dimensions: [10, 10] }],
        ],
      },
    ],
  },
  "ceiling.height": 2,
} satisfies THouseForSale;
