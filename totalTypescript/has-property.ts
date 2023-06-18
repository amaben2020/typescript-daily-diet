export const hasProperty = (obj: Record<string, string | undefined | null>) =>
  Boolean(Object.keys(obj).length >= 1);

console.log(hasProperty({ a: "" }));
