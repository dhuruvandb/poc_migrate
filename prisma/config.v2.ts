import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: './schema.v2.prisma',
  migrations: {
    path: 'prisma/migrations-v2', // separate folder for v2 migrations
  },
  engine: 'classic',
  datasource: {
    url: 'postgresql://postgres:12345@localhost:5432/prisma_version_poc?schema=v2',
  },
});
