import { integer, pgTable, varchar, boolean, timestamp, text, date } from "drizzle-orm/pg-core";


export const studentsProjects = pgTable("students_projects", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    ada_project_id : integer('ada_project_id').references(() => adaProjects.id).notNull(),
    promo_id : integer('promo_id').references(() => promos.id).notNull(),
    name: varchar({ length: 50 }).notNull(),
    description : varchar({length : 255}).notNull(),
    img : text("img").notNull(),
    weblink: text("weblink").notNull(),
    github: text("github").notNull(),
    demo : text("demo"),
    creationDate : timestamp("creation_date").notNull().defaultNow(),
    publicationDate : timestamp("publication_date").notNull().defaultNow()
});

export const promos = pgTable("promos", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 50 }).notNull(),
    startdate : date().notNull()

});

export const adaProjects = pgTable("ada_projects", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 50 }).notNull()
});