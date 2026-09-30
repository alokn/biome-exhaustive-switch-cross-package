const L = ["a", "b", "c"] as const;
type L = (typeof L)[number];

export function g(x: L): number {
  switch (x) {
    case "a":
      return 1;
    case "b":
      return 2;
  }
  return 0;
}
