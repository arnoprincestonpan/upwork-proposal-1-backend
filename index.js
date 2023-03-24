import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import routes from "./src/routes/currencyRoutes"
import cors from "cors"

const app = express()
const PORT = 3000

// when put as "localhost", there may be an error, so use "127.0.0.1"
const dbUrl = 'mongodb://127.0.0.1:27017/CurrencyExchange'

// body-parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// use cors
app.use(cors())

routes(app)

app.get("/", async(req, res) => {
    res.send(`Node and Express connected to port: ${PORT}`)
})

app.listen(PORT, async () => {
    try {
        await mongoose.connect(dbUrl)
    } catch (error) {
        console.log("db error")
        console.log(`${error}`)
    }
    console.log(`Node and Express connected to port: ${PORT}`)
})