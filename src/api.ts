/* eslint-disable no-underscore-dangle */
/**
 * third party libraries
 */
import bodyParser from 'body-parser';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import mapRoutes from './libs/express-routes-mapper';

/**
 * server configuration
 */
import config from './config';
import seeder from './config/seeds';
import dbService from './services/dbService';

declare const process: {
  env: {
    [key: string]: string;
  };
  exit: Function;
};

// environment: development, staging, testing, production
const environment = process.env.NODE_ENV;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * express application
 */
const app = express();
const server = new http.Server(app);
const controllersPath = path.join(path.basename(__dirname), 'controllers');
const mappedOpenRoutes = await mapRoutes(config.routes, controllersPath);
const DB = dbService(environment, config.migrate, seeder).start();

// allow cross origin requests
// configure to only allow requests from certain origins
app.use(cors());

// secure express app
app.use(
  helmet({
    dnsPrefetchControl: false,
    frameguard: false,
    ieNoOpen: false,
  }),
);

// parsing the request bodys
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// fill routes for express application
app.use('/api', mappedOpenRoutes);

server.listen(config.port, () => {
  if (
    environment !== 'production' &&
    environment !== 'development' &&
    environment !== 'testing'
  ) {
    console.error(
      `NODE_ENV is set to ${environment}, but only production and development are valid.`,
    );
    process.exit(1);
  }
  const url = `http://localhost:${config.port}`;
  console.log(`\nAPI Server is running at: \x1b[32m${url}\x1b[0m\n`);
  return DB;
});
