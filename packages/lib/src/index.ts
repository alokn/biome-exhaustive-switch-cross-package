export const S = ["a", "b", "c"] as const;
export type S = (typeof S)[number];
