# useExhaustiveSwitchCases misses a union imported from another workspace package

Reproduction for biomejs/biome#12026 (Biome 2.5.14). Scaffolded in the layout that
`npm create @biomejs/biome-reproduction` generates, then extended to a pnpm workspace,
because the bug only appears across workspace packages.

- `packages/lib/src/index.ts` exports `S`, a union derived from an `as const` array:
  `(typeof S)[number]`.
- `packages/app/src/cross.ts` switches on `S`, imported from `@repro/lib`, and misses `"c"`.
- `packages/app/src/local.ts` is the same switch over a locally declared copy of the union.

```sh
pnpm install
pnpm lint
```

**Expected:** `nursery/useExhaustiveSwitchCases` reports both `local.ts` and `cross.ts`.

**Actual:** only `local.ts` is reported:

```
packages/app/src/local.ts:5:3 lint/nursery/useExhaustiveSwitchCases  FIXABLE
  i These cases are missing:
  - "c"
Found 1 error.
```
