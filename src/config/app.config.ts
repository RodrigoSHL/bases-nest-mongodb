export const EnvConfig = () => ({
  environment: process.env.NODE_ENV || 'dev',
  port: process.env.PORTO || 3000,
  mongoDB: process.env.MONGO_DB,
  defaultLimit: +process.env.DEFAULT_LIMIT || 7,
});
