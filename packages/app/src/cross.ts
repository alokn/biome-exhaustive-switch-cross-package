import type { S } from "@repro/lib";

export function f(x: S): number {
  switch (x) {
    case "a":
      return 1;
    case "b":
      return 2;
  }
  return 0;
}
