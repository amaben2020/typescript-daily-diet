const store = {
  firstName: "",
};

const setStore = (
  store: Record<string, string>,
  newStore: Record<string, string>,
) => {
  return {
    ...store,
    ...newStore,
  };
};
const updatedStore = setStore(store, { lastName: "Benneth" });
console.log(updatedStore);
