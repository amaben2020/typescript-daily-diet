// understanding Set in JS Array<Manipulation>
// The JavaScript Set() constructor represents a set that is the collection of unique values. https://linuxhint.com/get-unique-values-from-array-in-javascript/

const REQUIRED_ENVS = [
  "NEXT_PUBLIC_BUILDER_API_KEY",
  "BUILDER_ADMIN_API_ENDPOINT",
  "BUILDER_PRIVATE_KEY_DEV",
  "BUILDER_PRIVATE_KEY_STAGE",
  "BUILDER_PRIVATE_KEY_PROD",
  "KLAVIYO_API",
  "KLAVIYO_PRIVATE_KEY",
  "NEXT_PUBLIC_APP_URL",
  "AZURE_AD_B2C_TENANT_NAME",
  "AZURE_AD_B2C_CLIENT_ID",
  "AZURE_AD_B2C_CLIENT_SECRET",
  "AZURE_AD_B2C_PRIMARY_USER_FLOW",
  "NEXT_PUBLIC_SWELL_STORE_ID",
  "NEXT_PUBLIC_SWELL_PUBLIC_KEY",
  "SWELL_SECRET_KEY",
  "SENDGRID_API_KEY",
  "SENDGRID_SENDER_EMAIL",
  "SUPPORT_EMAIL",
  "NEXT_PUBLIC_ALGOLIA_APPLICATION_ID",
  "NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY",
  "ALGOLIA_SEARCH_ADMIN_KEY",
  "NEXT_PUBLIC_NNOXX_STARTER_ID",
  "ENVIRONMENT",
] satisfies string[];

const processEnv = {
  TERM: "xterm-256color",
  SHELL: "/usr/local/bin/bash",
  USER: "maciej",
  PATH: "~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin",
  PWD: "/Users/maciej",
  EDITOR: "vim",
  SHLVL: "1",
  HOME: "/Users/maciej",
  LOGNAME: "maciej",
  env: "STAGING",
} satisfies Record<string, string>;

const generateUniqueArray = (arr: Array<any>) => [...new Set(arr)];

const missingEnv: string[] = [];
const showMissingEnv = (
  environments: string[],
  envs: Record<string, string>,
): string => {
  let missingEnv: string[] = [];

  for (const env of environments) {
    if (!environments.includes(envs[env])) {
      missingEnv.push(processEnv.env);
    } else {
      return "Okay";
    }
  }

  let finalResult = "";

  generateUniqueArray(missingEnv).forEach((res) => {
    finalResult = res;
  });

  envs["isOkay"] = "true";

  return finalResult + " " + envs.isOkay;
};

console.log("Missing Environment", showMissingEnv(REQUIRED_ENVS, processEnv));

const evenArray = [2, 6, 8, 12, 18, 4, 2, 18, 4];

const uniqueArray = evenArray.filter(
  (item, index, array) => array.indexOf(item) === index,
);

console.log("unique", uniqueArray);

console.log(evenArray.indexOf(12));

const ID_TO_DELETE = "NEXT_PUBLIC_NNOXX_STARTER_ID";

const newArr = [];
const otherArr = [];

// splice and deletion without filtering
for (const id of REQUIRED_ENVS) {
  if (id === ID_TO_DELETE) {
    newArr.push(REQUIRED_ENVS.splice(REQUIRED_ENVS.indexOf(id), 1));
  } else {
    otherArr.push(REQUIRED_ENVS);
  }
}

console.log("Deleted", newArr);
console.log("Remaining", otherArr);
