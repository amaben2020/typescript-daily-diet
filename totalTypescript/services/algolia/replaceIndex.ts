import algoliasearch from "algoliasearch";

// const usageClient = algoliasearch(
//   "U0GPCIA4WP",
//   "802e706019b445a6d3e6a5040035624d",
// );
const usageClient = algoliasearch(
  "U0GPCIA4WP",
  "802e706019b445a6d3e6a5040035624d",
);

class AlgoliaService {
  private client: any;

  constructor() {
    this.client = usageClient.initIndex("algomachine");
  }

  async createObject(data: any) {
    const response = await this.client.saveObjects(data);
    console.log(response);
    return response;
  }

  async replaceAllObjects(data: any) {
    const response = await this.client.replaceAllObjects(data, { safe: true });
    console.log(response);
    return response;
  }

  async getSingleObject(id: string) {
    const response = await this.client.getObject(id, {
      attributesToRetrieve: ["lastname"],
    });
    console.log(response);
    return response;
  }

  public async updateSingleObject(object: Record<string, string>) {
    const response = await this.client.partialUpdateObject(object);
    console.log(response);
    return response;
  }
}

// const objects: any = []; // Fetch your objects

// const index = usageClient.initIndex("algomachine");

// index.replaceAllObjects(objects).then(({ objectIDs }) => {
//   console.log(objectIDs);
// });

const itemsToIndex = [
  {
    firstname: "Benneth",
    lastname: "Uzor",
    objectID: "0071",
  },
  {
    firstname: "Benneth",
    lastname: "Uzor",
    objectID: "008",
  },
  {
    firstname: "Benneth",
    lastname: "Uzor",
    objectID: "097",
  },
];
// new AlgoliaService().createObject(itemsToIndex);

// new AlgoliaService().getObjects([
//   {
//     firstname: "Benneth",
//     lastname: "Uzor",
//     objectID: "007",
//   },
// ]);

const idToBeUpdated = "097";

const updateItem = async () => {
  for (let element of itemsToIndex) {
    if (idToBeUpdated === element.objectID) {
      console.log("elem", element);
      const updated = await new AlgoliaService().updateSingleObject({
        ...element,
        lastname: "Uzochukwu",
      });

      console.log("UPDATED", updated);
    }
  }
};

console.log(updateItem());

// look for a way to update category
