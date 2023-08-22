
# Contributing

## How can I contribute?

Check out open issues on [GitHub](https://github.com/osuresearch/ui/issues) and get in contact with an existing maintainer of the project.


## Submitting a Pull Request

Good pull requests, whether patches, improvements, or new features, are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

Please ask first before embarking on any significant pull requests (e.g. implementing features, refactoring code), otherwise you risk spending a lot of time working on something that the project's maintainers might not want to merge into the project.

For ambitious tasks, open a Pull Request as soon as possible with the `WIP: ` prefix in the title, in order to get feedback early.

Here is a summary of the steps to follow:

1. Clone the project from the upstream and install dependencies:

```sh
$ git clone git@github.com:osuresearch/ui.git
$ cd ui
$ yarn install
```

2. Create a new topic branch off the `main` branch to contain your feature, change, or fix:

```sh
$ git checkout -b <topic-branch-name>
```

3. Start the Storybook server

```sh
$ yarn storybook
```

4. Make your code changes and preview in Storybook
5. Merge any recent changes from the `main` branch and resolve any merge conflicts.
6. Push your topic branch up to the repository:

```sh
$ git push origin <topic-branch-name>
```

7. Open a Pull Request with a clear title and description
8. Assign a current maintainer to review and approve your changes


# Working with the code

## Source code

To ensure consistency and quality throughout the source code, all code modifications must have:

* [Valid commit message(s)](#commit-message-guidelines)
* Documentation for new features (components, props, hooks, arguments)
* Updated documentation for modified features


## Accessibility guidelines

Components must meet [WCAG 2.1 AA guidelines](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa) at a minimum.

If it's compliant to Level AAA - that's great! Document it in case we need to meet AAA on products later.

For assistance, reach out to another maintainer or our Accessibility Coordinator at oraccessibility@osu.edu.

## Commit message guidelines

### Atomic commits

If possible, make [atomic commits](https://en.wikipedia.org/wiki/Atomic_commit), which means:

* a commit should contain exactly one self-contained functional change
* a functional change should be contained in exactly one commit
* a commit should not create an inconsistent state (such as test errors, linting errors, partial fix, feature with documentation etc...)

A complex feature can be broken down into multiple commits as long as each one maintains a consistent state and consists of a self-contained change.

### Commit message format

This library uses [Semantic Release Bot](https://semantic-release.gitbook.io/semantic-release/) to automate the release of new versions by analyzing commit messages.

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:

```commit
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

The **footer** can contain a [closing reference to an issue](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically).

**Revert**

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

**Type**

The type must be one of the following:

| Type         | Description                                                                                                 |
|--------------|-------------------------------------------------------------------------------------------------------------|
| **build**    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| **ci**       | Changes to our CI configuration files and scripts
| **docs**     | Documentation only changes                                                                                  |
| **feat**     | A new feature                                                                                               |
| **fix**      | A bug fix                                                                                                   |
| **perf**     | A code change that improves performance                                                                     |
| **refactor** | A code change that neither fixes a bug nor adds a feature                                                   |
| **style**    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| **test**     | Adding missing tests or correcting existing tests                                                           |

**Subject**

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

**Body**
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

**Footer**
The footer should contain any information about **Breaking Changes** and is also the place to reference tickets that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines.
The rest of the commit message is then used for this.

**Examples**

```commit
fix(pencil): stop graphite breaking when too much pressure applied
```

```commit
feat(pencil): add 'graphiteWidth' option

Resolves #4
```

```commit
perf(pencil): remove graphiteWidth option

BREAKING CHANGE: The graphiteWidth option has been removed.

The default graphite width of 10mm is always used for performance reasons.
```

## General architecture

UI 5l leverages the following frameworks. Understand these before tackling issues:

- [Material UI](https://mui.com/material-ui/getting-started/) - our components are built off of Material UI 5.
- [React Stately](https://react-spectrum.adobe.com/react-stately/) - Drives our components that handle lists of things (checkbox sets, select lists, lookups, etc). Future components that handle lists need to follow similar patterns.
- [@osuresearch/iconography](https://github.com/osuresearch/iconography) - Our icons depend on our iconography package. If you need to introduce new icons, create an issue there.
- [Microbundle](https://github.com/developit/microbundle) - We use Microbundle to package our code for CommonJS/UMD/ESM/etc. There are quirks, like `devDependencies` that are referenced from bundled code being packaged directly in the final build, so read up on how this bundler works.
- [Storybook](https://storybook.js.org/) - Used as a workshop for building components in isolation, running tests, and providing documentation for consumers. Execute `yarn storybook` to start it up for development.

## Coding guidelines and tips

### Keep business logic in hooks

Think MVC - we want to keep components as just the view/controller layer and as much state management (model layer) in hooks as possible. This will allow us to eventually split off hooks into their own independent library, or reuse the same hooks across different components.

For inspiration, take a look at React Aria, React Stately, and Mantine Hooks.

### Check in both light and dark mode

Toggle back and forth often to make sure your component is accessible and usable in both light and dark modes.

### Run `yarn lint` often

The linter will reformat your code to our standard and check for a number of common issues. The linter will also be ran as a pre-commit hook.

### Use `Item` collections for iterable children

We standardize on using React Stately's `Item`, `Section` and `Collection` features for children of list-based components. This gives us a lot more flexibility and consistency in the API, e.g. by allowing consumers to customize the per-item renderer where appropriate while still maintaining higher performance rendering.

For some examples take a look at `CheckboxSetField`.

## Documenting guidelines and tips

### Describe use cases for your component

Some people may not know why they should use a `SubmitButton` over a `CallToActionButton` in their form. Describe why and how your component should be used.

### Add a11y details where relevant

Ideally include things like:
- What ARIA features are utilized (labeling, descriptions, roles)
- What keyboard shortcuts are utilized by the component

This will help our accessibility and code reviewers confirm compliance quicker.

### Add stories for significant examples

We don't need to add a story for every accent variant, event, and state. But do add stories for anything that is notable about your component.

Generally, include stories that show off:

- Controlled vs uncontrolled state management
- Variants that are very different from one-another
- Variations in content size. What does a modal look like with a sentence versus a paragraph?
- Responsiveness
- Composition with other components. E.g. using an Avatar within a Button. This should follow our common use cases within applications.

### Add stories for third party integrations

If a component is intended to integrate with a third party library make sure there are stories that cover these integrations.
