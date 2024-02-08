import { Equal, Expect } from "../helpers/type-utils";

namespace challenge {
  type DoNothing<T> = T;

  type res1 = DoNothing<"🖖">;
  type test1 = Expect<Equal<res1, "🖖">>;
}
