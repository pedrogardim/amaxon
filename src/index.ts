import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { booksRoute } from "./routes/books";
import { staticPlugin } from "@elysiajs/static";

export const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .get("/", () => Bun.file("src/pages/index.html"))
  .group("", booksRoute)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
