import dotenv from 'dotenv';
import mongoose from 'mongoose';
import App from './App';
import UserRouter from '../routes/UserRouter';
import LoginRouter from '../routes/LoginRouter';
import BookRouter from '../routes/BookRouter';
import ErrorHandler from '../middlewares/errors/ErrorHandler';

dotenv.config();

const myApp = new App();
mongoose.connect(`${process.env.MONGODB_URL}`);

myApp.addRouter(new UserRouter().router);
myApp.addRouter(new LoginRouter().router);
myApp.addRouter(new BookRouter().router);

myApp.addErrorHandler(ErrorHandler.handle);

myApp.startServer(process.env.PORT);
