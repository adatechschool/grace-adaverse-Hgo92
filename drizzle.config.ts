import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts', 
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!, // The '!' tells TS you know it's there
  },
});