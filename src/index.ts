import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { booksRoute } from "./routes/books";
import { staticPlugin } from "@elysiajs/static";
import { Database } from "bun:sqlite";
import MainLayout from "./views/layout/MainLayout";

export const db = new Database("./mydb.sqlite");

export const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .get("/", () => MainLayout())
  // .group("", booksRoute)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
