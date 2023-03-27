const hapi = require("@hapi/hapi");
const id = require("nanoid");
const routes = require("./src/route");

const init = async () => {
    const server = hapi.server({
        host: "localhost",
        port: 9000,
    });
    await server.start();
    server.route(routes);
    console.log("server runn on", server.info.uri);
};

process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});

init();
