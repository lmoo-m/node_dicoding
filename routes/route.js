import { Router } from "express";
import {
    addBook,
    deleteBook,
    editBook,
    getBooks,
    getBooksById,
} from "../controllers/bookController.js";

const router = Router();

router.get("/books", getBooks);
router.get("/books/:id", getBooksById);
router.post("/books/add", addBook);
router.patch("/books/edit/:id", editBook);
router.delete("/books/delete/:id", deleteBook);

export default router;
