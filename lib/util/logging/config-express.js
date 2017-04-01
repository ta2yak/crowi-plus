/**
 * Settings for Express Server
 *
 * get the options object that is passed to 'express-pino-logger'
 * @see https://www.npmjs.com/package/express-pino-logger
 * @see https://github.com/pinojs/pino/blob/master/docs/API.md
 */
module.exports = (env) => {
  const options = (env === 'production') ?
    // production
    {
      extreme: true,
      level: process.env.LEVEL || 'info',
    }:
    // other env
    {
      level: process.env.LEVEL || 'warn',
    };

  return options;
}
