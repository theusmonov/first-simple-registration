import express from "express";
import "dotenv/config"


const app = express();
 
let port = process.env["PORT"] || 7000
let host = process.env["HOST"] || "localhost"


app.listen(port, () => console.log(`Server is running in http://${host}:${port}`))