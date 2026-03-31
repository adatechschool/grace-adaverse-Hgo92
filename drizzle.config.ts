import 'dotenv/config'; // This is the magic line
import { defineConfig } from 'drizzle-kit';
import { config } from 'dotenv';

config({ path: '.env.local' });

// Check if the URL is actually loading
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is missing in drizzle.config.ts');
}

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts', 
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});