require("dotenv").config()
const connectDB = require("./db/connect")

const express = require("express");
const app = express();

const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler")

//middleware 
app.use(express.json())

//routes
app.get("/", (req, res) => {
    res.send("<h1>Store API</h1><br><a href='/api/v1/products'>Check the Products</a>")
})

app.use("/api/v1/products")

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening to ${port}...`))
    } catch (err) {
        console.log(err)
    }
}

start()