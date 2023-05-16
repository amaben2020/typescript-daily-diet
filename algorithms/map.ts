const peeps: Array<Record<string, string>> = [
  { id: "1", name: "Ben" },
  { id: "2", name: "Blessing" },
];

const message: Array<Record<string, string>> = [
  { id: "1", message: "Hello" },
  { id: "2", message: "Hey There" },
];

const peepsMap = new Map(peeps.map((elem) => [elem.id, elem.name]));

const messager = message.map((message) => {
  return {
    ...message,
    name: peepsMap.get(message.id),
  };
});
console.log(messager);
