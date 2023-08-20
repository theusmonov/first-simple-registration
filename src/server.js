import express from "express";
import "dotenv/config"
import router from "./routers/user.router.js";
import sequelize from "./config/database.js";
import path from "path"


const app = express();
app.use(express.json())

app.use((req, res, next) => {
    req.sequelize = sequelize
    next()
})


try {
    await sequelize.authenticate();
    console.log('Databasega ulanish muvaffaqiyatli amalga oshdi 🥳🥳🥳');
} catch (error) {
    console.error('Databasega ulanishdagi xatolik', error);
}



app.use(router)
app.use("/*", (req, res) => {
    res.send({
        status: 404,
        message: req.baseUrl + " not found 🧐🧐🧐"
    })
})
app.use(express.static(path.join(process.cwd(), "upload")))
let port = process.env["PORT"] || 7000
let host = process.env["HOST"] || "localhost"

app.listen(port, () => console.log(`Server is running in http://${host}:${port}`))