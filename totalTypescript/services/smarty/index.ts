// https://www.smarty.com/account/keys

const SmartyStreetsSDK = require("smartystreets-javascript-sdk");
const SmartyStreetsCore = SmartyStreetsSDK.core;
const Lookup = SmartyStreetsSDK.usStreet.Lookup;

let authId = "e0abe034-cead-436a-82f7-53411bc3057a";
let authToken = "BACmBhqjI24jfcgXSdUC";

let clientBuilder = new SmartyStreetsCore.ClientBuilder(
  new SmartyStreetsCore.StaticCredentials(authId, authToken),
);
let client = clientBuilder.buildUsStreetApiClient();

let lookup = new Lookup();
lookup.inputId = "24601"; // Optional ID from your system
lookup.addressee = "John Doe";
lookup.street = "330 N 100 W";
lookup.street2 = "closet under the stairs";
lookup.secondary = "APT 2";
lookup.urbanization = ""; // Only applies to Puerto Rico addresses
lookup.city = "Provo";
lookup.state = "Utah";
lookup.zipCode = "84601";
lookup.maxCandidates = 3;
lookup.match = "invalid";

client.send(lookup).then(handleSuccess).catch(handleError);

function handleSuccess(response: any) {
  console.log("Step 3. Show the resulting candidate addresses:");
  let lookup = response.lookups[0];
  lookup.result.map((candidate: any) =>
    console.log(`    ${candidate.deliveryLine1}, ${candidate.lastLine}`),
  );
}

function handleError(response: any) {
  console.log(response);
}
