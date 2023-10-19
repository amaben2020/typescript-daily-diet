const Airtable = require("airtable");

const base = new Airtable({
  apiKey: "keyjVGefZ4sfkS3u1",
}).base("appbCeP5USDYKieNH");

const fetchRecords = async () => {
  try {
    const baseRecords = await base("Customers").create([
      {
        fields: {
          Name: "Ben",
          Email: "amaben@gmail.com",
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

console.log(fetchRecords());
