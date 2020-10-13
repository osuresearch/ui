
# Contributing

Run `npm start` to boot up Styleguidist and develop locally. As you make changes to component code and examples, Styleguidist will rebuild your changes live.

Make sure all your components and changes are fully documented (Prop Types documentation, associated `readme.md` filled with examples, notes added to `CHANGELOG.md`).

Once your changes are ready to be used in an external application, run `npm run build` to generate an updated deployable of Styleguidist and ES5 components for usage through node_modules.

## Open Issues

Check out open issues on [YouTrack](https://ordevsvc01.rf.ohio-state.edu/youtrack/issues?q=project%3A+%7BPHP+Framework%7D+component%3A+ORIS%5CUI+%23Unresolved+) and create merge requests for implementations.


## Test Isolation

If you want to test certain components without running the entire styleguide, you can set the `ISOLATE_COMPONENTS` envvar to a path filter before running `npm start`. 

For example, if you want to isolate a specific component:

```sh
export ISOLATE_COMPONENTS=src/components/Button/index.tsx
npm start
```

Or if you want to show all JavaScript and TypeScript components in a specific folder:

```sh
export ISOLATE_COMPONENTS=src/experimental/**/index.?(js|tsx)
npm start
```

## Releasing

To deploy new releases of @oris/ui, you need to follow these steps **exactly**:

1. Gather your bullet list of changes that have been made since the last release
2. Determine the release version of those changes. See the top of CHANGELOG.md for how versions work
3. Update the version in `package.json` **on master**
4. Update the `CHANGELOG.md` with the new version block **on master**
5. Run `npm build` to rebuild the `dist` folder **on master**
6. Run `npm build:styleguide` to rebuild the `styleguide` folder **on master**
7. Tag your new version number in the format `A.B.C` **on master**
8. Notify people of the new release, typically via a message to the Teams General chat. 
