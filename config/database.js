import { Sequelize } from "sequelize";

const db = new Sequelize("bookshelf", "root", "", {
    dialect: "mysql",
    host: "localhost",
});

export default db;
