import { DataTypes } from "sequelize";
import db from "../config/database.js";

const books = db.define(
    "books",
    {
        book_title: DataTypes.STRING,
        author: DataTypes.STRING,
    },
    {
        freezeTableName: false,
    }
);

export default books;
