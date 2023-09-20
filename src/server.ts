import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import { favouritesRouter } from './routes/userdata.routes';


//Create an express application
const app = express();
console.log("entro a server")

app.use(cors());
app.use(express.json());
app.use(morgan("dev"))

app.use("/", favouritesRouter)



export default app;
