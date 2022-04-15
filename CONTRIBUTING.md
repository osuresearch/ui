
# Contributing

[[_TOC_]]

# How can I contribute?

Check out open tickets on [YouTrack](https://ordevsvc01.rf.ohio-state.edu/youtrack/issues?q=project%3A+%7BPHP+Framework%7D+component%3A+ORIS%5CUI+%23Unresolved+) and get in contact with an existing maintainer of the project. 


# Submitting a Merge Request

Good merge requests, whether patches, improvements, or new features, are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

Please ask first before embarking on any significant merge requests (e.g. implementing features, refactoring code), otherwise you risk spending a lot of time working on something that the project's maintainers might not want to merge into the project.

For ambitious tasks, open a Merge Request as soon as possible with the `WIP: ` prefix in the title, in order to get feedback early. 

Here is a summary of the steps to follow:

1. Clone the project from the upstream and install dependencies:

```sh
$ git clone git@code.osu.edu:ORIS/ui.git
$ cd ui
$ npm install
```

2. Create a new topic branch off the `master` branch to contain your feature, change, or fix:

```sh
$ git checkout -b <topic-branch-name>
```

3. Start the Styleguidist server in development mode

```sh
$ npm start
```

4. Make your code changes and preview in Styleguidist
5. Merge any recent changes from the `master` branch and resolve any merge conflicts.
6. Push your topic branch up to the repository:

```sh
$ git push origin <topic-branch-name>
```

7. Open a Merge Request with a clear title and description. 
8. After the CI pipeline has completed, review your changes in the deployed copy of Styleguidist on our development server
9. Assign a current maintainer to review and approve your changes


# Working with the code

## Source code

To ensure consistency and quality throughout the source code, all code modifications must have:

* [Valid commit message(s)](#commit-message-guidelines)
* Documentation for new features (components, props, hooks, arguments)
* Updated documentation for modified features


## Accessibility guidelines

Components must meet [WCAG 2.1 AA guidelines](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa). 

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

Fix FWK-42
```

```commit
perf(pencil): remove graphiteWidth option

BREAKING CHANGE: The graphiteWidth option has been removed.

The default graphite width of 10mm is always used for performance reasons.
```

## Test isolation

If you want to test certain components without the performance impact of running the full  styleguide you can set the `ISOLATE_COMPONENTS` envvar to a path filter before running `npm start`.

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
