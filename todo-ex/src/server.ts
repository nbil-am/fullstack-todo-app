import https from 'https'
import app from './app'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const option = {
    key: fs.readFileSync(path.join(__dirname,'../cert/localhost-key.pem')),
    cert: fs.readFileSync(path.join(__dirname,'../cert/localhost.pem')),
}

const port = process.env.SERVERPORT || 3000

https.createServer(option,app).listen(port, () => console.log(`server running on port https://localhost:${port}`))
