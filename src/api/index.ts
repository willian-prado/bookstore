import App from "./App";
import dotenv from 'dotenv';
dotenv.config();

const myApp = new App();

myApp.startServer(process.env.PORT);