import App from "./App";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from '../routes/UserRouter';

dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

const myApp = new App();
mongoose.connect(`${MONGODB_URL}`);

myApp.addRouter(userRouter);
myApp.startServer(PORT);
