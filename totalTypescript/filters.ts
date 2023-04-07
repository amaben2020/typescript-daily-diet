const allProducts = [
  {
    id: "5ece2c077e39da27658aa8a9",
    attributes: ["Cotton"],
    category: "dress",
    currency: "$",
    createdAt: "2021-01-01T12:00:27.87+00:20",
    image: null,
    inventoryType: "in_stock",
    isAvailable: true,
    isShippable: false,
    name: "Charlie Tulip Dress",
    price: 23.99,
    quantity: 85,
    updatedAt: "2021-01-01T12:00:27.87+00:20",
    variants: 2,
  },
  {
    id: "5ece2c0d16f70bff2cf86cd8",
    attributes: ["Cotton", "Variety of styles"],
    category: "dress",
    currency: "$",
    createdAt: "2021-01-01T12:00:27.87+00:20",
    image: null,
    inventoryType: "out_of_stock",
    isAvailable: false,
    isShippable: true,
    name: "Kate Leopard Dress",
    price: 95,
    quantity: 0,
    updatedAt: "2021-01-01T12:00:27.87+00:20",
    variants: 1,
  },
  {
    id: "5ece2c123fad30cbbff8d060",
    attributes: ["Variety of styles"],
    category: "jewelry",
    currency: "$",
    createdAt: 345354345,
    image: null,
    inventoryType: "in_stock",
    isAvailable: true,
    isShippable: false,
    name: "Layering Bracelets Collection",
    price: 155,
    quantity: 48,
    updatedAt: "2021-01-01T12:00:27.87+00:20",
    variants: 5,
  },
  {
    id: "5ece2c1be7996d1549d94e34",
    attributes: ["Polyester and Spandex"],
    category: "blouse",
    currency: "$",
    createdAt: "2021-01-01T12:00:27.87+00:20",
    image: null,
    inventoryType: "limited",
    isAvailable: false,
    isShippable: true,
    name: "Flared Sleeve Floral Blouse",
    price: 17.99,
    quantity: 5,
    updatedAt: "2021-01-01T12:00:27.87+00:20",
    variants: 1,
  },
];

//Requirement: Time allowed 20mins.
// i. filter based on inputs {category, attr, price gte 50.00, name, qty, isShippable, isAvailable}
// ii. Strongly type the functions using Generics
// iii. Store all parameters in an object
// iv. Implement a clear filters button to reset the state.

// applyFilters(products, 'Tulip', {
//   category: '',
//   availability: 'unavailable',
//   isShippable: true,
//   inStock: false,
// })

/**
 * @param {Array} products
 * @param {String} searchKey
 * @param {Object} query
 * @returns {Array} filteredProducts
 */

type TProducts = {
  id: string;
  attributes: string[];
  category: string;
  currency: string;
  createdAt: string;
  image: null | undefined;
  inventoryType: string;
  isAvailable: boolean;
  isShippable: boolean;
  name: string;
  price: number;
  quantity: number;
  updatedAt: string;
  variants: number;
};

type TQuery = Pick<TProducts, "attributes" | "category" | "isShippable">;

const applyFilters = (array: TProducts[], searchKey: any, query: any) => {
  return array.filter((elem: TProducts) => {
    let matches = false;

    // if (elem.attributes) {
    // }

    if (elem.name.includes(searchKey.toLowerCase())) {
      // matches = true;
      return elem;
    }

    if (elem.category.includes(query.category)) {
      // matches = true;
      return elem;
    }

    if (elem.isShippable) {
      // matches = true;
      return elem;
    }
    let isAttribute = false;
    elem.attributes.forEach((attr: string) => {
      if (query.attributes.includes(attr)) {
        console.log("attr", attr);
        isAttribute = true;
      }
    });
    return isAttribute;
    // return matches;
  });
};

const query = {
  category: "dress",
  availability: "unavailable",
  isShippable: true,
  inStock: false,
  attributes: ["Cotton", "Variety of styles"],
};

// const filteredProducts = applyFilters(
//   allProducts,
//   "Charlie Tulip Dress",
//   query,
// );

// console.log("filtered", filteredProducts);
