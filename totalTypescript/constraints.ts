// https://frendyguo.me/typescript-generic-constraint
//Generic constraints
type Lengthwise = {
  length: number;
};

function getLength<T extends Lengthwise>(arg: T): T["length"] {
  return arg.length;
}

// getLength("Hitchhiker's Guide to the Galaxy"); ✅ // 6
// getLength(42); ❌
// getLength({}); ❌
getLength([]);
// getLength(undefined); ❌
// getLength(null); ❌

type CustomType = {
  foo: string;
  bar: string;
  baz: string;
};

type StuffRequest = keyof CustomType;
type StuffResponse<T extends StuffRequest> = {
  [k in T]: CustomType[k];
};

function getStuff<T extends StuffRequest>(...args: T[]): T[] {
  return args;
}

const [foo, baz, bar] = getStuff("foo", "baz", "bar");

interface Guy {
  firstName: string;
  lastName: string;
  email: string;
}

interface RoleUser {
  roles: ["admin"];
}

// extending multiple interfaces
interface StaffGuy extends Guy, RoleUser {
  me: string;
}

// extends as constrain
export type QueryFunction<
  T = unknown,
  TQueryKey extends QueryKey = QueryKey,
> = (context: QueryFunctionContext<TQueryKey>) => T | Promise<T>;

// What matter here is to note the usage of the extends keyword: TQueryKey extends QueryKey = QueryKey. This can be read as TQueryKey and should be of type Query with a default value of QueryKey.
