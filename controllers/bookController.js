import books from "../models/books.js";

export const getBooks = async (req, res) => {
    try {
        const bookData = await books.findAll({
            attributes: ["id", "book_title", "author"],
        });

        res.send({
            succes: true,
            msg: "berhasil ambil data",
            data: bookData,
        });
    } catch (error) {
        res.status(500).send({
            msg: "ups error",
        });
    }
};

export const getBooksById = async (req, res) => {
    try {
        const bookData = await books.findOne({
            where: {
                id: req.params.id,
            },
        });

        res.send({
            succes: true,
            msg: "berhasil ambil data",
            data: bookData,
        });
    } catch (error) {
        res.status(500).send({
            msg: "ups error",
        });
    }
};

export const addBook = async (req, res) => {
    try {
        const { book_title, author } = req.body;

        await books.create({
            book_title: book_title,
            author: author,
        });

        res.send({
            succes: true,
            msg: "berhasil tambah data",
            data: [],
        });
    } catch (error) {
        res.status(500).send({
            msg: "ups error",
        });
    }
};

export const editBook = async (req, res) => {
    try {
        const { book_title, author } = req.body;

        await books.update(
            {
                book_title: book_title,
                author: author,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );

        res.send({
            succes: true,
            msg: "berhasil edit data",
            data: [],
        });
    } catch (error) {
        res.status(500).send({
            msg: "ups error",
        });
    }
};

export const deleteBook = async (req, res) => {
    try {
        await books.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.send({
            succes: true,
            msg: "berhasil hapus data",
            data: [],
        });
    } catch (error) {
        res.status(500).send({
            msg: "ups error",
        });
    }
};
