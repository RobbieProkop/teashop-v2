import express from "express";
const PORT = 8080;
const app = express();
app.get("/", (req, res) => {
    console.log("Hello From Server");
});
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
//# sourceMappingURL=server.js.map