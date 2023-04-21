import { cart } from "./cart";

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

      console.log("DATA", data);
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  async calculateTaxForOrder() {
    try {
      const data = await client.taxForOrder(mapToTaxjar);

      console.log("tax_collectable", data.tax?.breakdown.tax_collectable);
      console.log("tax ", data?.tax);
      // console.log("amount to collect", data?.tax.amount_to_collect);
      console.log("data", data);
      // console.log("DATA", data);
      return data;
    } catch (error) {
      console.log("ERROR ===> ", error);
    }
  }
}
// const tax = new Taxjar().getCategories();
// console.log("Tax", tax);
const calculateTax = new Taxjar().calculateTaxForOrder();

console.log("Tax", calculateTax);
