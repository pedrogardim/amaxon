import { Elysia } from "elysia";
import { html } from "@elysiajs/html";

export const app = new Elysia()
  .use(html())
  .get("/", () => Bun.file("src/pages/index.html"))
  .post("/messages", ({ html }) => html("<h2>test completed</h2>"))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
