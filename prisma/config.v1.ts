import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: './schema.v1.prisma',
  migrations: {
    path: 'prisma/migrations-v1', // where v1 migrations will be stored
  },
  engine: 'classic',
  datasource: {
    url: 'postgresql://postgres:12345@localhost:5432/prisma_version_poc?schema=v1',
  },
});
