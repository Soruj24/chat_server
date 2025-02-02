const server = require("./app");
const { port } = require("./secret");

server.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
}); 