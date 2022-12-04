// Indexed access types: Access deeper parts of objects and arrays

type ColorVariants = {
  primary: "red",
  secondary: "green",
  tertiary: "blue"
}

type PrimaryColor = ColorVariants["primary"]

type Letters = ["a", "b", "c"];

type AOrB = Letters[0 | 1];
type Letter = Letters[number];

interface UserRoleConfig {
  user: ["view", "create", "update"]
  superAdmin: ["view", "create", "update", "delete"]
}

type Role = UserRoleConfig[keyof UserRoleConfig][number]

const UserRole: Role = "create"

const isAdmin: Pick<UserRoleConfig, "superAdmin"> = {
  superAdmin: ["view", "create", "update", "delete"]
}

