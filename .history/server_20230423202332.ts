//Arquivo responsável por iniciar a API
import { App } from "./src/App";
const port = process.env.PORT || 3000;
const app = new App(port);
app.start();