const app = require("./app");
const { port } = require("./secret");

app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
}); 