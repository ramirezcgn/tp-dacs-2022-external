import routes from './routes';

declare const process: {
  env: {
    [key: string]: string;
  };
};

const config = {
  migrate: false,
  routes,
  port: process.env.PORT || '4000',
};

export default config;
