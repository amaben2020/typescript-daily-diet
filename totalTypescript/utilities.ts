// Selectively Construct Types from Other Types

interface UserI {
  id: string;
  firstName: string;
  lastName: string;
}
// TYPE THEN KEY
type Names = Omit<UserI, "id">
type MyType = Pick<UserI, "firstName" | "lastName">;