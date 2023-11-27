const Airtable = require("airtable");

const base = new Airtable({
  apiKey: "keyjVGefZ4sfkS3u1",
}).base("appbCeP5USDYKieNH");

const fetchRecords = async () => {
  try {
    const baseRecords = await base("Customers").create([
      {
        fields: {
          Name: "Ben1",
          Email: "amaben1@gmail.com",
        },
      },

      {
        fields: {
          Name: "Ben2",
          Email: "amaben2@gmail.com",
        },
      },
    ]);

    console.log("baseRecords", baseRecords);
    // .eachPage(function page(records: any, fetchNextPage: any) {
    //   console.log("RECORDS", records);
    //   records.forEach(function (record: any) {
    //     console.log("Retrieved", record.get("Name"));
    //   });
    // });
  } catch (error) {
    console.log("Error", error);
  }
};

// console.log(fetchRecords());

const users = [
  { email: "amaben@gmail.com", name: "Benneth" },
  { email: "second@gmail.com", name: "Tobias" },
];
const appendThird = (users: Array<{ email: string; name: string }>) => {
  return users.reduce((acc, cv) => {
    return {
      ...acc,
      ...cv,
    };
  }, {});
};

console.log(appendThird(users));
