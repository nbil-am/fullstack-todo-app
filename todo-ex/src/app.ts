import express from "express";
import mainRoutes from './routes/main.route'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/',mainRoutes)

export default app;
