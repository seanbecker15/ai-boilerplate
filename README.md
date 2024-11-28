# AI Boilerplate

TypeScript monorepo powered by Turborepo.

## Apps and Packages

- `api`: a web server
- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@ai-boilerplate/database`: a prism ORM library to manage our db schema
- `@ai-boilerplate/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@ai-boilerplate/logger`: a log utility
- `@ai-boilerplate/shared`: contains utils, domain types, and constants
- `@ai-boilerplate/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@ai-boilerplate/ui`: a stub React component library shared by both `web` and `docs` applications

## Contributing

### Build

To build all apps and packages, run the following command:

```sh
cd ai-boilerplate
pnpm build
```

### Develop

To set up local database:

```sh
docker compose up -d # spin up database container
cp .env.example .env # set environment variables (used by prisma:dev commands)
pnpm prisma:dev -- migrate dev # run database migration
pnpm prisma:dev -- migrate reset --force # seed database
```

To develop all apps and packages, run the following command:

```sh
cd ai-boilerplate
pnpm dev
```

### Test

To run tests you can either run once or watch:

```sh
cd ai-boilerplate
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
