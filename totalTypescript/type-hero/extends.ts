// extends as inheritance

interface IPostsP {
  title: string;
  author: string;
}

interface IPostedByP {
  title: string;
  reference: string;
}

interface IBlogDataP extends IPostsP, IPostedByP {
  postedOn: string;
}

const blogDataP: IBlogDataP = {
  title: "",
  author: "",
  postedOn: "",
  reference: "",
};

// extends as a constraint
// export type QueryFunction<
//   T = unknown,
//   TQueryKey extends QueryKey = QueryKey,
// > = (context: QueryFunctionContext<TQueryKey>) => T | Promise<T>;

type THumana<T, U extends number> = {
  by: T;
  send: U;
};

const infoHumana: THumana<string, number> = {
  by: "",
  send: 2,
};

// an array, function, the return of the function

const mapper = <T, U>(array: T[], fn: (value: T) => U): U[] => {
  return array.map(fn);
};
const mapperUsage = mapper<string, number>(["a", "b", "c"], parseInt);

type State = {
  searchKeyWords: string;
  isSlidingPanelOpen: boolean;
  selectedJobDocumentId: number;
};

/**
 * Create a Union type from an Object type
 * that will use the Object key as `type` entry and the
 * Object value as `payload`
 */

type Unionize<T extends object> = {
  [k in keyof T]: { type: k; payload: T[k] };
}[keyof T];

// I want to create this

type Actions = Unionize<State>;

/// So it can be used like this
function reducers(state: State, action: Actions) {
  switch (action.type) {
    case "searchKeyWords":
      return {
        ...state,
        searchKeyWords: action.payload,
      };
    case "isSlidingPanelOpen":
      return {
        ...state,
        isSlidingPanelOpen: action.payload,
      };
    case "selectedJobDocumentId":
      return {
        ...state,
        selectedJobDocumentId: action.payload,
      };
    default:
      return state;
  }
}

const INITIAL_STATE = {
  isOpen: false,
  isClose: true,
};

type TInitialState = typeof INITIAL_STATE;

type TActions<T extends TInitialState> = {
  [k in keyof T]: { type: k; payload: T[k] };
}[keyof T];

//Same as:  isOpen: {type: isOpen, payload: boolean}[isOpen]

const modalReducer = (
  state: TInitialState,
  action: TActions<TInitialState>,
) => {
  switch (action.type) {
    case "isOpen":
      return {
        ...state,
        isOpen: action.payload,
      };
    case "isClose":
      return {
        ...state,
        isClose: action.payload,
      };
    default:
      throw Error("No action found");
  }
};

type TInfoGem = {
  name: string;
};

const me: TInfoGem["name"] = "Ben";

const INITIAL_PRODUCTS = {
  products: [],
  isLoading: false,
  isError: false,
};

type TProductState = {
  products: Array<number>;
  isLoading: boolean;
  isError: boolean;
};

type TProductAction<T extends TProductState> = {
  [K in keyof T]: {
    type: K;
    payload: T[K];
  };
}[keyof T];

const productReducer = (
  state: TProductState,
  action: TProductAction<TProductState>,
) => {
  switch (action.type) {
    case "products": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: ["yeah"],
      };
    }

    default: {
      return state;
    }
  }
};
