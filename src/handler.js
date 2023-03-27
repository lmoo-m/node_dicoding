const book = require("./book");
const { nanoid } = require("nanoid");

const handler = {
    getBooks(req, h) {
        const datas = [];
        book.forEach((e) => {
            const data = {
                id: e.id,
                name: e.name,
                publisher: e.publisher,
            };
            datas.push(data);
        });

        const res = h
            .response({
                status: "success",
                data: datas,
            })
            .code(200);
        return res;
    },

    getBookId(req, h) {
        const id = req.params.id;
        const data = book.filter((e) => e.id === id);
        if (data.length != 0) {
            const res = h
                .response({
                    status: "success",
                    data: { book: data[0] },
                })
                .code(200);
            return res;
        } else {
            const res = h
                .response({
                    status: "fail",
                    message: "Buku tidak ditemukan",
                })
                .code(404);
            return res;
        }
    },

    addBooks(req, h) {
        const {
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
        } = req.payload;
        const id = nanoid(16);
        const date = new Date().toISOString();

        if (name === "") {
            const res = h
                .response({
                    status: "fail",
                    message: "Gagal menambahkan buku. Mohon isi nama buku",
                })
                .code(400);
            return res;
        } else if (readPage > pageCount) {
            const res = h
                .response({
                    status: "fail",
                    message:
                        "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
                })
                .code(400);
            return res;
        }

        const newBook = {
            id: id,
            name: name,
            year: year,
            author: author,
            summary: summary,
            publisher: publisher,
            pageCount: pageCount,
            readPage: readPage,
            finished: false,
            reading: reading,
            insertedAt: date,
            updatedAt: date,
        };
        book.push(newBook);
        const res = h
            .response({
                status: "success",
                message: "Buku berhasil ditambahkan",
                data: {
                    id: id,
                },
            })
            .code(201);
        return res;
    },

    editBook(req, h) {
        const {
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
        } = req.payload;
        const id = req.params.id;
        const date = new Date().toISOString();
        const data = book.filter((e) => e.id === id);

        if (name === "") {
            const res = h
                .response({
                    status: "fail",
                    message: "Gagal memperbarui buku. Mohon isi nama buku",
                })
                .code(400);
            return res;
        } else if (readPage > pageCount) {
            const res = h
                .response({
                    status: "fail",
                    message:
                        "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount",
                })
                .code(400);
            return res;
        }

        if (data.length != 0) {
            data[0].name = name;
            data[0].year = year;
            data[0].author = author;
            data[0].summary = summary;
            data[0].publisher = publisher;
            data[0].pageCount = pageCount;
            data[0].readPage = readPage;
            data[0].reading = reading;
            data[0].updatedAt = date;
            const res = h
                .response({
                    status: "success",
                    message: "Buku berhasil diperbarui",
                })
                .code(200);
            return res;
        } else {
            const res = h
                .response({
                    status: "fail",
                    message: "Gagal memperbarui buku. Id tidak ditemukan",
                })
                .code(404);
            return res;
        }
    },
    deleteBook(req, h) {
        const id = req.params.id;
        const findId = book.findIndex((e) => e.id === id);

        if (findId != -1) {
            book.splice(findId, 1);
            const res = h
                .response({
                    status: "success",
                    message: "Buku berhasil dihapus",
                })
                .code(200);
            return res;
        } else {
            const res = h
                .response({
                    status: "fail",
                    message: "Buku gagal dihapus. Id tidak ditemukan",
                })
                .code(404);
            return res;
        }
    },
};

module.exports = handler;
