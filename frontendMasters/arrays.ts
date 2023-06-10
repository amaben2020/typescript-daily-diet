// array
//@ts-nocheck
// tuples: array with fixed length
let myCar: [number, string, string] = [2002, "Totota", "Corolla"];

myCar = [2002, "Totota", "Corolla"];

type TDataSources = {
  name: string;
  value: string;
}[];

type TValues = "books" | "infographics" | "videos";

const resources = [
  {
    name: "Books",
    value: "books",
  },
  {
    name: "Infographics",
    value: "infographics",
  },
  {
    name: "Videos",
    value: "videos",
  },
] satisfies TDataSources;

const currentPath = "https://alpro/infographics";

const logActivePath = () => {
  let isActive = false;

  resources?.forEach((elem: any) => {
    if (currentPath.includes(elem.value)) {
      isActive = true;
    }
  });

  return isActive ? "yeah" : "nope";
};
// console.log(logActivePath());

// includes
const str = "amaben is a great man";
const res = "amaben";

// console.log(str.includes(res));

const strin = "To be, or not to be, that is the question.";
// console.log(strin.includes("or"));

const people = [
  { name: "Blessing", age: 26 },
  { name: "Enyinnaya", age: 1 },
  { name: "Williams", age: 4 },
].map((elem) =>
  elem.name.indexOf("Blessing")
    ? {
        ...elem,
        isWife: true,
      }
    : {
        ...elem,
        isWife: false,
      },
);
// console.log(people);

const someProp = people.every((person) => person.isWife);
// console.log(someProp);

const user = {
  isEmployer: false,
  name: "Benneth",
  occupation: "SE",
};

const createUser = () => {
  if (user.isEmployer || user.occupation === "SE") {
    return "redirect to employee route";
  } else {
    return "redirect to SE route";
  }
};
// console.log(createUser());

const links: Array<Record<string, string>> = [
  { url: "/", title: "Contact" },
  { url: "/education", title: "Education" },
  { title: "About", url: "/about" },
  { title: "Confirm", url: "/confirm" },
];

type TActiveLinks = {
  url: string;
  title: string;
  isActive?: boolean;
}[];

type ActiveLinks2 = {
  [Properties in keyof T]: Properties[T];
};

const userInfoo = {
  name: "Ben",
  age: 30,
};

const urlPath = "https://path/education";

const activeLink = (): ReturnType<ActiveLinks2> => {
  try {
    const activePath = new URL(urlPath).pathname;
    return links.map((l) => {
      if (l.url.includes(activePath)) {
        return {
          ...l,
          isActive: true,
        };
      }

      return { ...l };
    });
  } catch (error) {
    console.log(error.message);
  }
};
// console.log("activeLink", activeLink());

const AppSmith = {
  name: "string",
  power: 22,
  age: {
    year: "10/20/2020",
  },
};

type TAppSmith = (typeof AppSmith)["age"];

const year: TAppSmith = { year: "1992" };

// console.log(year);

const object = {
  id: "6455218886861700128c2b80",
  attributes: {},
  content: {
    productBenefits: [
      {
        icon: "uil:truck",
        text: "Free US shipping on all orders over $100",
      },
      {
        icon: "uil:clock-two",
        text: "Free returns up to 30 days",
      },
      {
        icon: "uil:award",
        text: "98% customer satisfaction rating",
      },
    ],
    enableQuantity: true,
    maxQuantity: 99,
    upSellCols: 4,
  },
  currency: "USD",
  bundle: true,
  bundleItems: [
    {
      id: "6455218886861700128c2b7e",
      productId: "6455207b86861700128c2b53",
      variantId: null,
      options: [],
      quantity: 1,
      price: 200,
      origPrice: 200,
      shipmentWeight: 0,
      productName: "NNOXX One Subscription",
      variant: null,
      product: {
        name: "NNOXX One Subscription",
        sku: null,
        type: "digital",
        active: true,
        images: [
          {
            file: {
              id: "645bfa938764cf0012f33d10",
              dateUploaded: "2023-05-10T20:12:03.589Z",
              length: 15104,
              md5: "154f1601187b35352e08c6c0f5ee6e88",
              filename: null,
              url: "https://cdn.swell.store/evolving-fitness/645bfa938764cf0012f33d10/154f1601187b35352e08c6c0f5ee6e88",
              width: 148,
              height: 148,
            },
            id: "645bfa142f6a77001236d7e8",
          },
        ],
        taxCode: null,
        purchaseOptions: {
          subscription: {
            active: true,
            plans: [
              {
                name: "Yearly",
                description: null,
                price: 200,
                billingSchedule: {
                  interval: "yearly",
                  intervalCount: 1,
                  limit: null,
                  trialDays: 0,
                },
                id: "6455207b86861700128c2b54",
                active: true,
              },
            ],
          },
        },
        tags: [],
        metaTitle: null,
        metaDescription: null,
        slug: "nnoxx-one-subscription",
        attributes: {},
        delivery: null,
        virtual: true,
        bundle: null,
        price: 200,
        stockTracking: false,
        options: [],
        currency: "USD",
        dateCreated: "2023-05-05T15:27:55.799Z",
        stockStatus: null,
        dateUpdated: "2023-05-18T17:37:02.223Z",
        popularity: 5,
        id: "6455207b86861700128c2b53",
      },
    },
    {
      id: "6455218886861700128c2b7f",
      productId: "64551e5610fcc700115f5b29",
      variantId: null,
      options: [],
      quantity: 1,
      price: 299,
      origPrice: 299,
      delivery: "shipment",
      shipmentWeight: 0,
      productName: "NNOXX One Wearable",
      variant: null,
      product: {
        name: "NNOXX One Wearable",
        sku: "001-01-01-23-02-01",
        active: true,
        images: [
          {
            file: {
              id: "645c1558356b9b0012f6dd44",
              dateUploaded: "2023-05-10T22:06:16.183Z",
              length: 931072,
              md5: "79f91e3f25846b8ccc0855d6f2a2e72a",
              filename: null,
              url: "https://cdn.swell.store/evolving-fitness/645c1558356b9b0012f6dd44/79f91e3f25846b8ccc0855d6f2a2e72a",
              width: 1440,
              height: 1440,
            },
            id: "64551e5610fcc700115f5b2a",
          },
        ],
        taxCode: null,
        purchaseOptions: {
          standard: {
            active: true,
            price: 299,
            sale: false,
            salePrice: null,
            prices: [],
          },
        },
        variable: false,
        description:
          '<span id="isPasted" style="color: rgb(65, 65, 65); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">The NNOXX wearable monitors real-time oxygen and active nitric oxide levels deep in working muscles.</span>​',
        tags: [],
        metaTitle: null,
        metaDescription: null,
        slug: "nnoxx-one-wearable",
        attributes: {},
        delivery: "shipment",
        bundle: null,
        price: 299,
        stockTracking: false,
        options: [],
        currency: "USD",
        sale: false,
        salePrice: null,
        prices: [],
        type: "physical",
        dateCreated: "2023-05-05T15:18:46.908Z",
        stockStatus: null,
        dateUpdated: "2023-05-18T17:42:24.149Z",
        popularity: 10,
        id: "64551e5610fcc700115f5b29",
      },
    },
  ],
  images: [
    {
      id: "645bfabf8764cf0012f33d16",
      file: {
        height: 148,
        md5: "154f1601187b35352e08c6c0f5ee6e88",
        url: "https://cdn.swell.store/evolving-fitness/645bfab9921cb70012601d07/154f1601187b35352e08c6c0f5ee6e88",
        width: 148,
      },
    },
  ],
  metaDescription: null,
  metaTitle: null,
  name: "NNOXX One",
  options: [],
  price: 0,
  purchaseOptions: {},
  sku: null,
  slug: "nnoxx-one",
  stockStatus: null,
  stockTracking: false,
  tags: [],
  variants: {
    count: 0,
    pageCount: 1,
    page: 1,
    results: [],
  },
};

const sortProducts = (data: any) => {
  return (
    Array.isArray(data.bundleItems) &&
    data.bundleItems.sort((a: any, b: any) => {
      if (
        a.product.purchaseOptions?.subscription?.active ||
        b.product.purchaseOptions?.subscription?.active
      ) {
        return -1;
      } else if (!b.product.purchaseOptions?.subscription?.active) {
        return 1;
      } else return a - b;
    })
  );
};

// console.log("sortProducts", sortProducts(object));

const data2 = [
  {
    id: "6455218886861700128c2b7e",
    productId: "6455207b86861700128c2b53",
    variantId: null,
    options: [],
    quantity: 1,
    price: 200,
    origPrice: 200,
    shipmentWeight: 0,
    productName: "NNOXX One Subscription",
    variant: null,
    product: {
      name: "NNOXX One Subscription",
      sku: null,
      type: "digital",
      active: true,
      images: [
        {
          file: {
            id: "645bfa938764cf0012f33d10",
            dateUploaded: "2023-05-10T20:12:03.589Z",
            length: 15104,
            md5: "154f1601187b35352e08c6c0f5ee6e88",
            filename: null,
            url: "https://cdn.swell.store/evolving-fitness/645bfa938764cf0012f33d10/154f1601187b35352e08c6c0f5ee6e88",
            width: 148,
            height: 148,
          },
          id: "645bfa142f6a77001236d7e8",
        },
      ],
      taxCode: null,
      purchaseOptions: {
        subscription: {
          active: true,
          plans: [
            {
              name: "Yearly",
              description: null,
              price: 200,
              billingSchedule: {
                interval: "yearly",
                intervalCount: 1,
                limit: null,
                trialDays: 0,
              },
              id: "6455207b86861700128c2b54",
              active: true,
            },
          ],
        },
      },
      variable: false,
      description:
        '<span id="isPasted" style="color: rgb(65, 65, 65); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">A subscription to NNOXX One allows you to connect and upload all your workouts to the NNOXX mobile application.</span>​',
      tags: [],
      metaTitle: null,
      metaDescription: null,
      slug: "nnoxx-one-subscription",
      attributes: {},
      delivery: null,
      virtual: true,
      bundle: null,
      price: 200,
      stockTracking: false,
      options: [],
      currency: "USD",
      dateCreated: "2023-05-05T15:27:55.799Z",
      stockStatus: null,
      dateUpdated: "2023-05-18T17:37:02.223Z",
      popularity: 5,
      id: "6455207b86861700128c2b53",
    },
  },
  {
    id: "6455218886861700128c2b7f",
    productId: "64551e5610fcc700115f5b29",
    variantId: null,
    options: [],
    quantity: 1,
    price: 299,
    origPrice: 299,
    delivery: "shipment",
    shipmentWeight: 0,
    productName: "NNOXX One Wearable",
    variant: null,
    product: {
      name: "NNOXX One Wearable",
      sku: "001-01-01-23-02-01",
      active: true,
      images: [
        {
          file: {
            id: "645c1558356b9b0012f6dd44",
            dateUploaded: "2023-05-10T22:06:16.183Z",
            length: 931072,
            md5: "79f91e3f25846b8ccc0855d6f2a2e72a",
            filename: null,
            url: "https://cdn.swell.store/evolving-fitness/645c1558356b9b0012f6dd44/79f91e3f25846b8ccc0855d6f2a2e72a",
            width: 1440,
            height: 1440,
          },
          id: "64551e5610fcc700115f5b2a",
        },
      ],
      taxCode: null,
      purchaseOptions: {
        standard: {
          active: true,
          price: 299,
          sale: false,
          salePrice: null,
          prices: [],
        },
      },
      variable: false,
      description:
        '<span id="isPasted" style="color: rgb(65, 65, 65); font-family: sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;">The NNOXX wearable monitors real-time oxygen and active nitric oxide levels deep in working muscles.</span>​',
      tags: [],
      metaTitle: null,
      metaDescription: null,
      slug: "nnoxx-one-wearable",
      attributes: {},
      delivery: "shipment",
      bundle: null,
      price: 299,
      stockTracking: false,
      options: [],
      currency: "USD",
      sale: false,
      salePrice: null,
      prices: [],
      type: "physical",
      dateCreated: "2023-05-05T15:18:46.908Z",
      stockStatus: null,
      dateUpdated: "2023-05-18T17:42:24.149Z",
      popularity: 10,
      id: "64551e5610fcc700115f5b29",
    },
  },
].sort((a, b) => {
  if (b.delivery === "shipment") {
    return 1;
  } else {
    return -1;
  }
});

// console.log("data2", data2);

const idsInChat = [1, 7, 17, 17];
// dedupe: deduplicate
const isUnique = (id) => {
  return idsInChat.filter((element) => element !== id);
};
// console.log(isUnique(17));

// check if user is not more than one
const isUnique2 = (id: number) => {
  const ids = new Set(idsInChat);
  console.log("Before", ids.size);
  ids.delete(id);
  console.log("After", ids.size);
};
// https://www.youtube.com/watch?v=hubQQ3F337A
console.log(isUnique2(17));
