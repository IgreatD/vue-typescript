const path = require('path');
const merge = require('webpack-merge');
const tsImportPluginFactory = require('ts-import-plugin');
const { cdn, vant } = require('./config/index.ts');
module.exports = {
  parallel: false,
  chainWebpack: (config) => {
    config.externals({});
    config.plugin('html').tap((args) => {
      args[0].cdn = cdn;
      return args;
    });
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap((options) => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: (name) => `${name}/style/less`,
              }),
            ],
          }),
          compilerOptions: {
            module: 'es2015',
          },
        });
        return options;
      });
  },

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          ...vant,
        },
      },
    },
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/styles/pre/*.less')],
    },
  },

  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api/ft/': {
        target: 'http://kysj.chinanorth.cloudapp.chinacloudapi.cn:7001/',
        pathRewrite: {
          '^/api/ft/': '',
        },
      },
      '/cos': {
        target: 'http://101.201.152.49:9009/sts-auth',
        pathRewrite: {
          '^/cos': '',
        },
      },
    },
  },
};
