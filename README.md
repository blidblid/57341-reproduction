# 57341Reproduction

This is repro of https://github.com/angular/angular/issues/57341.

### Steps:

1. Note that `src/app/children/h/index.ts` is empty, which causes an error in `ChildrenSharingModule`
2. `ng s`
3. The console is filled with `TS-996002` for every import of `ChildrenSharingModule`

Even though this is a small project, it still takes long time for a developer to figure out what's actually wrong.

### Steps to compare logs with a broken feature module:

1. Fix `src/app/children/h/index.ts`
2. Remove contents of `src/app/features/h/index.ts` instead
3. The console is now clear and concise with a single `TS-996002`.

I don't think that `TS-996002` should be reported for every consumer of `ChildrenSharingModule`.
