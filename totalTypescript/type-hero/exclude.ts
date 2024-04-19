type MyExclude<T, U> = T extends U ? never : T;

type t = MyExclude<"a" | "b" | "c", "a">;

type THuman = "yeah" | "nope";

type THumanExtended = Exclude<THuman, "nope">;

const item: THumanExtended = "yeah";
