import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// LOG THIS TO YOUR TERMINAL
console.log("--- ENV CHECK ---");
console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("------------------");

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing! Check your .env.local file location.");
}

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql);