module.exports = {
    extends: [
        '@ecomfe/eslint-config',
        '@ecomfe/eslint-config/import',
        '@ecomfe/eslint-config/san'
    ],
    env: {
        browser: true,
        node: true
    },
    root: true,
    rules: {
        'import/unambiguous': 0,
        'import/no-commonjs': 0,
        // 禁止 console，要用写 eslint disbale
        'no-console': 2,
        // 禁止 debugger，防止上线
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 禁止 alert，要用写 eslint disable
        'no-alert': 2,
        // 不用的 var，要删除，手动 tree shaking，要洁癖
        'no-unused-vars': 2,
        // 没定义就用的就别用，全局的要用 写 eslint global
        'no-undef': 2,
        'comma-dangle': ['error', 'never'],
        'import/no-unresolved': 0
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx']
            }
        }
    }
};
