interface IInitialState {
  items: { name: string; age: number }[];
}

type IActions =
  | {
      type: "ADD_TO_ITEMS";
      payload: Record<string, number | string>;
    }
  | {
      type: "DELETE_ITEMS";
      payload: { name: string; age: number };
    };

const initialState: IInitialState = {
  items: [],
};

const reducer = (state: IInitialState, action: IActions) => {
  switch (action.type) {
    case "ADD_TO_ITEMS":
      return [...state.items, action.payload];

    case "DELETE_ITEMS":
      return state.items.filter((elem) => !elem.name);

    default:
      return null;
  }
};

console.log(
  reducer(initialState, {
    type: "ADD_TO_ITEMS",
    payload: { name: "algomachine", age: 30 },
  }),
);

console.log(
  reducer(initialState, {
    type: "ADD_TO_ITEMS",
    payload: { name: "algomachine2", age: 31 },
  }),
);

console.log(initialState.items);
