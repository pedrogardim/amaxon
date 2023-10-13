import Elysia from "elysia";
import { getAllBooks } from "../controllers/books";

export const booksRoute = (app: Elysia) => app.get("/books", getAllBooks);
