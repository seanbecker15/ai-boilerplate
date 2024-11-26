# AI Contributor

TypeScript monorepo powered by Turborepo.

## Apps and Packages

- `cli`: a command line utility that interfaces with the backend
- `api`: a server that orchestrates changes to code repositories
- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@ai-contributor/database`: a prism ORM library to manage our db schema
- `@ai-contributor/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@ai-contributor/logger`: a log utility
- `@ai-contributor/shared`: contains utils, domain types, and constants
- `@ai-contributor/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@ai-contributor/ui`: a stub React component library shared by both `web` and `docs` applications
## Contributing

### Build

To build all apps and packages, run the following command:

```sh
cd ai-contributor
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```sh
cd ai-contributor
pnpm dev
```

### Test

To run tests you can either run once or watch:

```sh
cd ai-contributor
pnpm test:watch # or pnpm test
```

## Useful Links

More information on Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
