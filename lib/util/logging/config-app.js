/**
 * Settings for Crowi App
 *
 * get the options object that is passed to 'pino'
 * @see https://github.com/pinojs/pino/blob/master/docs/API.md
 */
module.exports = (env) => {
  const options = (env === 'production') ?
    // production
    {
      level: process.env.LEVEL || 'info',
    }:
    // other env
    {
      level: process.env.LEVEL || 'debug',
    };

  return options;
}
