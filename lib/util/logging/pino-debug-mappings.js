/**
 * Settings for pino-debug
 *
 * get the options object that is passed to 'pino-debug'
 * @see https://www.npmjs.com/package/pino-debug
 */
module.exports = (env) => {

  /*
   * see also https://github.com/pinojs/pino/issues/206
   *
   * 'map' option is imperfect.
   * ANY debug namespaces found in the keys of opts.map will be enabled regardless of its value.
   */

  const mappings = (env === 'production') ?
    // production
    {
      'crowi:crowi': true,
      'crowi:InterceptorManager': true,
      'crowi:plugins:PluginService': true,
      // '*': true,
    }:
    // other env
    {
      'crowi:crowi': true,
      // 'crowi:models:*': true,
      // 'crowi:models:page': true,
      // 'crowi:models:user': true,
      // 'crowi:routes:admin': true,
      // 'crowi:routes:login': true,
      // 'crowi:routes:me': true,
      // 'crowi:routes:page': true,
      // 'crowi:lib:search': true,
      'crowi:InterceptorManager': true,
      'crowi:plugins:PluginService': true,
      // '*': true,
    };

  return mappings;
}
