import { db } from "../index";
import { promos } from "./schema";

async function main() {
  const promo: typeof promos.$inferInsert[] = [{
    name: 'Grace Hopper',
    startdate : '2025-10-01'
  },{
    name : 'Frida Khalo',
    startdate : '2025-05-01'
  }, 
  {
    name : 'Gisèle Halimi',
    startdate : '2026-01-15'
  }
];

  await db.insert(promos).values(promo);
  console.log('Les promos ont été créées') }