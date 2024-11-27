# Prisma database

## Commonly used commands

```sh
# Runs `prisma migrate dev` against database specified in .env file found in turbo root
pnpm prisma:dev -- migrate dev

# Runs `prisma studio` against database specified in .env file found in turbo root
pnpm prisma:dev -- studio

# Runs `prisma generate` (environment agnostic)
pnpm prisma:generate

# Runs prisma against database specified via environment variables (for hosted environments)
pnpm prisma:deploy
```
