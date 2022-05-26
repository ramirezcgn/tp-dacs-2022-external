/* eslint-disable prefer-destructuring, no-await-in-loop, new-cap */
import express from 'express';
import path from 'path';
import url from 'url';
import fs from 'fs';

import splitByLastDot from './helpers/splitByLastDot';
import isConstructor from './helpers/isConstrutor';

const cwd = process.cwd();

const mapRoutes = async (routes, pathToController, middlewareGenerals = []) => {
  const router = express.Router();
  let requestMethodPath;
  let requestMethod;

  let controllerMethod;
  let controller;
  let contr;

  let myPath;
  const myPathToController = path.join(cwd, pathToController);

  const routesArr = Object.entries(routes);
  for (const value of routesArr) {
    let middlewares;
    // to let use an array or only one function as general middlewares
    if (Array.isArray(middlewareGenerals)) {
      middlewares = [...middlewareGenerals];
    } else if (typeof middlewareGenerals === 'function') {
      middlewares = [middlewareGenerals];
    } else {
      middlewares = [];
    }
    requestMethodPath = value[0].replace(/\s\s+/g, ' ');
    requestMethod = requestMethodPath.split(' ')[0].toLocaleLowerCase();
    myPath = requestMethodPath.split(' ')[1];

    if (typeof value[1] === 'string') {
      controller = splitByLastDot(value[1])[0];
      controllerMethod = splitByLastDot(value[1])[1];
    } else {
      // contains middlewares and other configuration
      const props: any = value[1];

      // Extract controller paths
      if (props.path !== undefined) {
        controller = splitByLastDot(props.path)[0];
        controllerMethod = splitByLastDot(props.path)[1];
      }

      // Extract middlewares.
      if (props.middlewares !== undefined && Array.isArray(props.middlewares)) {
        middlewares.push(...props.middlewares);
      }
    }
    middlewares = middlewares.filter((el) => el != null);

    try {
      const controllerPath = path.join(myPathToController, `${controller}.ts`);
      if (!fs.existsSync(controllerPath)) {
        console.log(`Error: File ${controllerPath} not found!`);
        break;
      }
      const { default: handler } = await import(
        url.pathToFileURL(controllerPath).toString()
      );
      const isConstructable = isConstructor(handler);
      if (isConstructable) {
        contr = new handler();
      } else {
        contr = handler();
      }
    } catch (err) {
      console.log('Error: ', err.message);
      break;
    }

    router.route(myPath)[requestMethod](middlewares, contr[controllerMethod]);
  }

  return router;
};

export default mapRoutes;
