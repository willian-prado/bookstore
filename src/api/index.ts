import App from "./App";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import UserRouter from '../routes/UserRouter';
import LoginRouter from "../routes/LoginRouter";
import ErrorHandler from '../middlewares/errors/ErrorHandler';

dotenv.config();

const myApp = new App();
mongoose.connect(`${process.env.MONGODB_URL}`);

const userRouter = new UserRouter();
const loginRouter = new LoginRouter();

myApp.addRouter(userRouter.router);
myApp.addRouter(loginRouter.router);
myApp.addErrorHandler(ErrorHandler.handle);

myApp.startServer(process.env.PORT);
