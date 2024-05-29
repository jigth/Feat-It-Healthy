import "dotenv/config";
import morgan from 'morgan';
import cors from 'cors';
import express, { Express } from "express";

const app: Express = express();
const port = process.env.PORT || 3000;


// Database
import "./shared/infrastructure/database/typeorm/index";
import { loadAppRoutes } from "./shared/infrastructure/routes/loadAppRoutes";

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes
loadAppRoutes(app);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
