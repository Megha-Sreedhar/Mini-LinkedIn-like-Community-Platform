import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello, World!");
    console.log('Seems like someone made a request');
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})
