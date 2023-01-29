type IsString<T> = T extends string ? true : false;

type AA = IsString<string>; // A === true
type BB = IsString<"abc">; // B === true
type CC = IsString<123>; // C === false

