//TS deals with members, you wanna pick some of the members

export type P3d = {
  x: number;
  y: number;
  z: number;
};
// you're picking x or y props from 3d for 2d
export type P2D = Pick<P3d, "x" | "y">;
