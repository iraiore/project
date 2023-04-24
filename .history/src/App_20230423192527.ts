//Arquivo resposável por conectar todas as partes da api

import express, { Application} from 'express';
import { initRoutes } from './api/routes';
import logger from 'morgan';

export class App {}