import { integer, pgTable, varchar, boolean, timestamp, text } from "drizzle-orm/pg-core";

export const studentsProjects = pgTable("students_projects", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    ada_project_id : integer('ada_project_id').references(() => adaProjects.id).notNull(),
    promo_id : integer('promo_id').references(() => promos.id).notNull(),
    name: varchar({ length: 50 }).notNull(),
    description : varchar({length : 255}).notNull(),
    img : text("img").notNull(),
    weblink: text("weblink").notNull(),
    github: text("github").notNull(),
    creationDate : timestamp("creation_date").notNull(),
    valid : boolean("valid").notNull(),
    publicationDate : timestamp("publication_date")
});

export const promos = pgTable("promos", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 50 }).notNull(),
  startdate : timestamp().notNull()
  
});

export const adaProjects = pgTable("ada_projects", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 50 }).notNull()
});