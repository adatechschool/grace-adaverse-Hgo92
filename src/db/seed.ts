import { db } from "../index";
import fs from 'fs';
import path from "path";
import { sql } from "drizzle-orm";

async function checkSql(fileName : string) {
    const filePath = path.join(__dirname, 'queries', fileName);
    const query = fs.readFileSync(filePath, 'utf8');

    await db.execute(sql.raw(query));
}

async function main() {
    try {
        await checkSql('projectsAda.sql');
        await checkSql('promos.sql');
    } catch (error) {
        console.error("Le seed n'a pas marché :", error);
    }
}

main()