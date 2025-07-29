import express from 'express'
import https from 'https'
import fs from 'fs'
import path from 'path'
import 'dotenv/config'

const option = {
    key: fs.readFileSync(path.join(__dirname,'../cert/localhost-key.pem')),
    cert: fs.readFileSync(path.join(__dirname,'../cert/localhost.pem')),
}

const app = express()
app.use(express.json())

const port = process.env.SERVERPORT || 3000

app.get("/", (req,res) => [
    res.json("mc")
])


https.createServer(option,app).listen(port, () => console.log(`server running on port https://localhost:${port}`))