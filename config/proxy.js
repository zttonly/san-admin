const DEV_TARGET_URL = 'https://baidu.com';
const TEST_TARGET_URL = 'https://baidu.com';

// devServer的proxy代理配置 https://webpack.docschina.org/configuration/dev-server/#devserverproxy
const PROXY = {
    dev: {
        '/api/': {
            target: DEV_TARGET_URL,
            changeOrigin: true,
        }
    },
    test: {
        '/api/': {
            target: TEST_TARGET_URL,
            changeOrigin: true,
        }
    }
};

module.exports = {
    proxy: PROXY[process.env.SANP_APP_ENV || 'dev']
};

