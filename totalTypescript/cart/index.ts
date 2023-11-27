type TCartItem = { title: string; id: number; price: number; quantity: number };

// [{title: "", price: 200, quantity: 2}, {title: "", price: 100, quantity: 5}]
// (price * quantity) = 400 + 500 = 900
class Cart {
  cart: Array<TCartItem>;
  totalQuantity: number;
  cartTotal: number;
  constructor() {
    this.cart = [];
    this.totalQuantity = 0;
    this.cartTotal = 0;
  }

  addToCart(cartItem: TCartItem) {
    this.cart.push(cartItem);
    this.totalQuantity = this.cart.length;
    this.cartTotal = this.cart.reduce((acc, cv) => {
      acc += cv.price * cv.quantity;
      return acc;
    }, 0);
  }
  removeFromCart(id: number) {
    this.cart.filter((item) => item.id !== id);
    this.totalQuantity = this.cart.length;
  }
  updateCart(id: number, qty: number) {
    const itemToUpdate = this.cart.find((elem) => elem.id === id);

    if (itemToUpdate?.quantity) {
      itemToUpdate.quantity = qty;
      this.cartTotal = this.cart.reduce((acc, cv) => {
        acc += cv.price * cv.quantity;
        return acc;
      }, 0);
      return this.cart;
    }
  }
}

const cart = new Cart();

cart.addToCart({
  title: "Iphone 12 pro max",
  id: 1,
  price: 1000,
  quantity: 1,
});

cart.addToCart({
  title: "Iphone 13 pro max",
  id: 2,
  price: 1800,
  quantity: 1,
});

cart.updateCart(2, 4);

console.log(cart.cart);
console.log(cart.cartTotal);
