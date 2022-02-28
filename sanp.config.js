const path = require('path');
const webpack = require('webpack');
const createThemeColorReplacerPlugin = require('./config/themePluginConfig');

const resolve = pathname => path.resolve(__dirname, pathname);

const outDir = 'dist';
const {theme} = require('./config');
const updateThemeSetting = require('./config/updateSetting');

module.exports = {
    type: 'spa',
    pages: [
        {
            name: 'index',
            title: 'San Admin',
            layout: 'layouts/index.ejs',
            filename: 'index.html',
            chunks: ['vendors', 'commons', 'index'],
            head: {
                tags: [
                    {
                        tagName: 'link',
                        attributes: {
                            rel: 'icon',
                            href: '/favicon.ico'
                        }
                    }
                ]
            }
        }
    ],
    build: {
        outDir,
        cache: false,
        script: {
            babel: {
                plugins: [
                    ['import', {
                        libraryName: 'santd',
                        libraryDirectory: 'es',
                        style: true
                    }],
                    '@babel/plugin-transform-modules-commonjs'
                ]
            }
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                name: false,
                cacheGroups: {
                    vendors: {
                        name: 'vendors',
                        test: /[\\/]node_modules[\\/]/,
                        priority: 10
                    },
                    commons: {
                        name: 'commons',
                        test: resolve('components'),
                        minChunks: 2,
                        priority: 5,
                        reuseExistingChunk: true
                    }
                }
            }
        },
        finalize: (config, internals) => {
            // 增加alias
            config.resolve.alias['@store'] = path.resolve('lib/Store.js');

            config.plugins.push(new webpack.ContextReplacementPlugin(
                /dayjs[\/\\]locale$/,
                /zh-cn|en/
            ));
            // css
            config.plugins.push(createThemeColorReplacerPlugin());

            internals.replaceOption(/\.less$/, 'less-loader', {
                modifyVars: {
                    'primary-color': theme['primary-color']
                },
                javascriptEnabled: true
            }, config);
            return config;
        }
    },
    server: {
        onBeforeSetupMiddleware: (app) => {
            updateThemeSetting(app);
        },
        contentBase: `${outDir}/`,
        // 配置文件
        mock: 'config/proxy.js',
    }

};
