/* eslint valid-jsdoc: "off" */

'use strict';

/** app info
 */
module.exports = () => {
  const config = {};
  // 配置端口号，主机名
  config.cluster = {
    listen: {
      path: '',
      port: 7001,
      hostname: '',
      https: true,
    },
  };
  return config;
};
