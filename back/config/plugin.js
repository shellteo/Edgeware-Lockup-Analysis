'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  sequelize: {
    enable: false,
    package: 'egg-sequelize',
  },
  // 框架安全机制，测试阶段暂时停用
  security: {
    enable: false,
    xframe: {
      enable: false,
    },
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  redis: {
    enable: false,
    package: 'egg-redis',
  },
};
