const imagesToNormalize = [
  [
    {
      file: {
        id: "64a6d92b01e95b0011249de6",
        dateUploaded: "2023-07-06T15:09:31.750Z",
        length: 681188,
        md5: "a8bbdd296c34c47caae81b8217e1036c",
        filename: null,
        contentType: "image/png",
        url: "https://cdn.swell.store/nnoxx-staging/64a6d92b01e95b0011249de6/a8bbdd296c34c47caae81b8217e1036c",
        width: 1440,
        height: 828,
      },
      id: "64a6ccba9e712d0012b9e705",
    },
    {},
    {
      file: {
        id: "64a6d92b01e95b0011249de6",
        dateUploaded: "2023-07-06T15:09:31.750Z",
        length: 681188,
        md5: "a8bbdd296c34c47caae81b8217e1036c",
        filename: null,
        contentType: "image/png",
        url: "https://cdn.swell.store/nnoxx-staging/64a6d92b01e95b0011249de6/a8bbdd296c34c47caae81b8217e1036c",
        width: 1440,
        height: 828,
      },
      id: "64a6ccba9e712d0012b9e705",
    },
    {
      id: "64a6d9a37624410012befe6a",
    },
    {
      id: "64b9be92f42019001280e2e6",
    },
  ],
  [
    {
      file: {
        id: "645bfeff723d0900125124d4",
        dateUploaded: "2023-05-10T20:30:55.307Z",
        length: 15104,
        md5: "154f1601187b35352e08c6c0f5ee6e88",
        filename: null,
        url: "https://cdn.swell.store/nnoxx-staging/645bfeff723d0900125124d4/154f1601187b35352e08c6c0f5ee6e88",
        width: 148,
        height: 148,
      },
      id: "645bff01fd6ddf001241c0d7",
    },
  ],
];

const normalizeSwellBundleImages = (images: any) => {
  return images.flat().filter((elem: any) => elem.file);
};
console.log(normalizeSwellBundleImages(imagesToNormalize));

let company: TCompanyData = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 1600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};
