const handler = require("./handler");
const { nanoid } = require("nanoid");

const routes = [
    {
        method: "GET",
        path: "/books",
        handler: handler.getBooks,
    },
    {
        method: "GET",
        path: "/books/{id}",
        handler: handler.getBookId,
    },
    {
        method: "POST",
        path: "/books",
        handler: handler.addBooks,
    },
    {
        method: "PUT",
        path: "/books/{id}",
        handler: handler.editBook,
    },
    {
        method: "DELETE",
        path: "/books/{id}",
        handler: handler.deleteBook,
    },
];

module.exports = routes;
