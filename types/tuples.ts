// Understanding a tuple

// A tuple can be thought of as an array with a fixed number of elements. Some of React’s hooks return tuples. Can you guess those hooks? TypeScript tuples are a convenient way of strongly-typing small and obvious data structures. It is essential to use a type annotation with these rather than rely on type inference.

const benScores: [string, ...number[]] = ["Ben", 50, 75, 85];
