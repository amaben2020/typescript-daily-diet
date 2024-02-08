// we use mapped types when we do not know the exact api response

type TInformate = {
  count: number;
  currentPage: number;
  pages: number;
};

type TApiData = {
  info: TInformate;
  results: {
    [userId: string]: number;
  };
};

const apiData: TApiData = {
  info: {
    count: 9001,
    currentPage: 1,
    pages: 22,
  },
  results: {
    "user_ddb04d2e-21ff-4c68-9bdc-135c16c8e74a": 0,
    "user_1e118b25-c0b9-4bfc-8d04-901ad8a2eb20": 3,
    "user_7c56283c-6a5e-4d79-bdd0-9c6a3cafd2c4": 15,
    "user_2eac2f5e-4f11-4d36-84b5-9d273816d6f6": 7,
    "user_4b88b4a3-8d42-4fc9-9f73-8db296d9b03d": 88,
    "user_af836d5e-16a2-452d-bec4-694d6cd8e49f": 92,
    "user_610c236f-b3bb-45e9-a09b-1d7e362c7fbb": 14,
    "user_7a8e29f0-d7b0-4b75-9ad2-c8a145073eab": 6,
    "user_eaa914df-4650-4c3b-9a04-723b5a63f297": 764,
    "user_3199b7c6-7a8d-47eb-ae94-4e3457ad7760": 32,
    // ... for many more rows in this page
  },
};

type TNestedData = {
  info: {
    count: number;
    currentPage: number;
    pages: {
      limit: number;
      page: number;
    };
  };

  results: {
    [key: string]:
      | {
          [key: string]: string | number | [string, string];
        }
      | number;
  };
};

const nestedData: TNestedData = {
  info: {
    count: 9001,
    currentPage: 1,
    pages: {
      limit: 5,
      page: 1,
    },
  },
  results: {
    "user_ddb04d2e-21ff-4c68-9bdc-135c16c8e74a": {
      location: "Abuja",
      altitude: 2121221.21212,
      landmarks: ["National park", "Obi palace"],
    },
    "user_1e118b25-c0b9-4bfc-8d04-901ad8a2eb20": 3,
    "user_7c56283c-6a5e-4d79-bdd0-9c6a3cafd2c4": 15,
    "user_2eac2f5e-4f11-4d36-84b5-9d273816d6f6": 7,
    "user_4b88b4a3-8d42-4fc9-9f73-8db296d9b03d": 88,
    "user_af836d5e-16a2-452d-bec4-694d6cd8e49f": 92,
    "user_610c236f-b3bb-45e9-a09b-1d7e362c7fbb": 14,
    "user_7a8e29f0-d7b0-4b75-9ad2-c8a145073eab": 6,
    "user_eaa914df-4650-4c3b-9a04-723b5a63f297": 764,
    "user_3199b7c6-7a8d-47eb-ae94-4e3457ad7760": 32,
  },
};

console.log(nestedData);

type UserCoy = {
  id: number;
  name: string;
  age: number;
};

type PartialUser<T> = {
  [K in keyof T]?: T[K];
};

const partialUser: PartialUser<UserCoy> = {
  age: 22,
};

type TPartiality<T extends UserCoy> = {
  [K in keyof T]?: T[K];
};

const partialUser2: TPartiality<UserCoy> = {
  age: 22,
};

type TApiD2 = {
  [key: string]: {
    [key: string]: number;
  };
  results: {
    [key: string]: number;
  };
};

const apiData2: TApiD2 = {
  info: {
    count: 9001,
    currentPage: 1,
    pages: 22,
  },
  results: {
    "user_ddb04d2e-21ff-4c68-9bdc-135c16c8e74a": 0,
    "user_1e118b25-c0b9-4bfc-8d04-901ad8a2eb20": 3,
    "user_7c56283c-6a5e-4d79-bdd0-9c6a3cafd2c4": 15,
    "user_2eac2f5e-4f11-4d36-84b5-9d273816d6f6": 7,
    "user_4b88b4a3-8d42-4fc9-9f73-8db296d9b03d": 88,
    "user_af836d5e-16a2-452d-bec4-694d6cd8e49f": 92,
    "user_610c236f-b3bb-45e9-a09b-1d7e362c7fbb": 14,
    "user_7a8e29f0-d7b0-4b75-9ad2-c8a145073eab": 6,
    "user_eaa914df-4650-4c3b-9a04-723b5a63f297": 764,
    "user_3199b7c6-7a8d-47eb-ae94-4e3457ad7760": 32,
    // ... for many more rows in this page
  },
};
