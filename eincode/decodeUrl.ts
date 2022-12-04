// Decode URL search params at the type level with ts-toolbelt

const query = `/home?a=foo&b=wow`

// const obj: Union.Merge<QueryParams> = {
//   a: "foo",
//   b: "wow",
// }

type Query = typeof query

type SecondQueryPart = String.Split<Query, "?">[1]