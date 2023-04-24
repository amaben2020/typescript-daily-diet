import { cart } from "./cart";

import axios from "axios";

const TOKEN = "4434120e410908bcb3144d64a547780b";

const taxjar = require("taxjar");

const client = new taxjar({
  apiKey: TOKEN,
});

client.setApiConfig("headers", {
  "x-api-version": "2022-01-24",
});

const normalizeProductToTaxjar = (array: any) => {
  return array.map((elem: any) => ({
    id: elem.productId,
    quantity: elem.quantity,
    // product_tax_code: elem.product.sku, // Product tax code for the item. If omitted, the item will remain fully taxable.
    unit_price: elem.product.price,
    discount: elem.discountEach,
  }));
};

const mapToTaxjar = {
  from_country: cart?.billing.country,
  from_zip: cart?.billing.zip,
  from_state: cart?.billing.state,
  from_city: cart?.billing.city,
  from_street: cart?.billing.address1,
  to_country: cart?.shipping.country,
  to_zip: cart?.shipping.zip,
  to_state: cart?.shipping.state,
  to_city: cart?.shipping.city,
  to_street: cart?.shipping.address1,
  amount: cart.subTotal, // amount means the total of items purchased
  shipping: cart?.shipping.price ?? 1.5,
  line_items: normalizeProductToTaxjar(cart?.items),
};

class Taxjar {
  async getCategories() {
    try {
      const data = await client.categories();
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  async calculateTaxForOrder() {
    try {
      const data = await client.taxForOrder(mapToTaxjar);
      return data.tax?.breakdown.tax_collectable;
    } catch (error) {
      console.log("ERROR ===> ", error);
    }
  }

  // service creation pattern
  async calculateTaxForOrderCurl() {
    try {
      return await axios.post("https://api.taxjar.com/v2/taxes", mapToTaxjar, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      //@ts-ignore
      // console.log("result", data);

      //@ts-ignore
      // return data.tax?.breakdown.tax_collectable;
    } catch (error) {
      console.log("ERROR ===> ", error);
    }
  }

  async getOrderTransaction() {}
}

const calculateTax = new Taxjar()
  .calculateTaxForOrderCurl()
  .then((res) => {
    console.log(
      "res?.data.tax?.breakdown.tax_collectable",
      res?.data.tax?.breakdown.tax_collectable,
    );
  })
  .catch((err) => console.log("err", err));

console.log("Tax", calculateTax);

// const info = {
//   from_city: "Abuja",
//   from_country: "US",
//   from_state: "AR",
//   from_street: "No 2, House street, Keffi - Abuja express way",
//   from_zip: "	72764",
//   to_country: "US",
//   to_zip: "90002",
//   to_state: "CA",
//   to_city: "Los Angeles",
//   to_street: "1335 E 103rd St",
//   amount: 299,
//   shipping: 1.5,
//   line_items: [{ id: "635c10f2954a480012b218e4", quantity: 1, unit_price: 299, discount: 0 }],
// };

const string = JSON.stringify(cart);

console.log(string);
