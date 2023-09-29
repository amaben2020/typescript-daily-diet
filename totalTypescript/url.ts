//https://webtips.dev/solutions/get-query-params-in-react
// Retrieve params via url.search, passed into ctor

const url = new URL("https://example.com?foo=1&bar=2");
const params = new URLSearchParams(url.search);
console.log("url", url);
console.log("params", params);

// Pass in a string literal
const params2 = new URLSearchParams("foo=1&bar=2");
const params2a = new URLSearchParams("?foo=1&bar=2");

// Pass in a sequence of pairs
const params3 = new URLSearchParams([
  ["foo", "1"],
  ["bar", "2"],
]);

console.log("params3", params3);

console.log("params2.get(foo)", params2.get("foo"));

// Very simple
const veryLongQuery: string =
  "https://example.com?foo=1&bar=2&sex=m&occupation=software_engineer";

const occupation = new URLSearchParams(new URL(veryLongQuery).search).get(
  "occupation",
);

const buildUpUrl = "https://example.com?a=b&b=c";
const paramsUrl = { name: "hasServed", value: true };

const addQueryToUrl = (url: string, params: any) => {
  const urlWithSearch = new URL(url).search.slice(1);

  let queryBuilder: any = new URLSearchParams(urlWithSearch);

  queryBuilder.set("amaben", "dev");

  console.log("queryBuilder", queryBuilder);
  return queryBuilder;
};

addQueryToUrl(buildUpUrl, paramsUrl);

function sumOfEvenSquares(numbers: number[]) {
  const POWER = 2;
  if (Array.isArray(numbers)) {
    return numbers.filter(Boolean).reduce((acc, cv) => {
      if (Number(cv) % 2 === 0 && typeof cv === "number") {
        acc += Number(Math.pow(POWER, cv));
      }
      return Number(acc);
    }, 0);
  }
}

console.log(sumOfEvenSquares([1, 2, 3, 4, 5]));
