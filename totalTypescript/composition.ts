// Use function overloads and generics to type a compose function

// This is a key tenet of functional programming.


// usage: compose

const elems = [
  { key: 'home', label: 'Home', qty: 1 },
  { key: 'product', label: 'Product', qty: 1 },
  { key: 'about', label: 'About', qty: 1 },
  { key: 'secure', label: 'Secure', disabled: true, qty: 1 },
];



const composer = (...fns: any[]) =>
  fns.reduce(
    (f, g) =>
      (...args: any) =>
        f(g(...args))
  );

// console.log(composer(add))

const nodes = [
  {
    id: '4dcdce8a-dd29-5018-b4c4-d4868043e602',
    slug: 'home',
    node_locale: 'en-US',
    title: 'home',
  },
  {
    id: 'e3bba8d6-ccd7-54cc-986a-c51f9acdbba8',
    slug: 'page-two',
    node_locale: 'en-US',
    title: 'page-two',
  },
];

let shoppingCart = [
  {
    product: 'phone',
    qty: 1,
    price: 500,
  },
  {
    product: 'Screen Protector',
    qty: 1,
    price: 10,
  },
  {
    product: 'Memory Card',
    qty: 2,
    price: 20,
  },
];

const shopper = shoppingCart.reduce((a, b) => {

  const newProducts = {
    [b.product]: b.product
  }
  return {
    ...a,
    ...newProducts
  }
}, {})

console.log('shopper', shopper)

const instruction = <Acc, K extends keyof Acc & {
  slug: string,
  node_locale: string
}>(accumulator: Acc, currentValue: K) => {
  const slug = {
    [currentValue.slug]: {
      slug: `${currentValue.node_locale}` + '/' + `${currentValue.slug}`,
    },
  };

  return {
    ...accumulator,
    ...slug,
  };
};
const getMyPath2 = (array: any[]) => array.reduce(instruction, {});

console.log('final path', getMyPath2(nodes));

const posts = [
  { id: 1, category: "frontend", title: "All About That Sass" },
  { id: 2, category: "backend", title: "Beam me up, Scotty: Apache Beam tips" },
  { id: 3, category: "frontend", title: "Sanitizing HTML: Going antibactirial on XSS attacks" }
];

// const categoryPosts = posts.reduce((acc, post) => {
//   let { id, category } = post;
//   return { ...acc, [category]: [...(acc[category] || []), id] };
// }, {});