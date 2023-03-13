// Template literal types allow us to build more flexible types. As its name suggests, they have the same syntax as template literal strings in JavaScript but are used in type positions.

type Hello = "Hello";
type World = "World";
type HelloWorld = `${Hello}${World}!`;

type EntityType = "Message" | "Folder" | "File" | "NewEntity";
type EventOperations = "Created" | "Updated" | "Deleted";
type EventNames = `on${EntityType}${EventOperations}`;
// onMessageCreated,  onFolderUpdated etc
const logEvent = (
  entityType: EntityType,
  operations: EventOperations,
): EventNames => {
  return `on${entityType}${operations}`;
};

console.log(logEvent("Message", "Deleted"));
