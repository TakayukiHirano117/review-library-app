import express from "express";
import { BookController } from "./presentation/bookController";

const app = express();

app.use(express.json());

const bookController = new BookController();

app.post("/books", bookController.add.bind(bookController));
app.get("/books/:id", bookController.findById.bind(bookController));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
