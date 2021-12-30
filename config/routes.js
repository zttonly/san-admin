export const asyncRouterMap = [
    {
        rule: '/',
        hideInMenu: true,
        Component: () => import('/containers/dashboard/analysis'),
        name: '欢迎',
        icon: 'smile'
    },
    {
        rule: '/dashboard',
        name: 'Dashboard',
        icon: 'dashboard',
        children: [
            {
                rule: '/dashboard/analysis',
                Component: () => import('/containers/dashboard/analysis'),
                name: '分析页',
                root: '首页',
            },
            {
                rule: '/dashboard/monitor',
                Component: () => import('/containers/dashboard/monitor'),
                name: '监控页',
                root: '首页',
            },
            {
                rule: '/dashboard/workplace',
                Component: () => import('/containers/dashboard/workplace'),
                name: '工作台',
                root: '首页',
            },
        ]
    },
    {
        rule: '/form',
        name: '表单页',
        icon: 'form',
        children: [
            {
                rule: '/form/basic-form',
                name: 'basic-form',
                Component: () => import('/containers/form/basic-form'),
                name: '基础表单',
                root: '首页',
            },
            {
                rule: '/form/step-form',
                name: 'step-form',
                Component: () => import('/containers/form/step-form'),
                name: '分步表单',
                root: '首页',
            },
            {
                rule: '/form/advanced-form',
                name: 'advanced-form',
                Component: () => import('/containers/form/advanced-form'),
                name: '高级表单',
                root: '首页',
            },
        ]
    },
    {
        rule: '/list',
        name: '列表页',
        icon: 'table',
        children: [
            {
                rule: '/list/table-list',
                name: 'table-list',
                name: '查询列表',
                Component: () => import('/containers/list/table-list'),
                root: '首页',
            },
            {
                rule: '/list/basic-list',
                Component: () => import('/containers/list/basic-list'),
                name: '标准列表',
                root: '首页',
            },
            {
                rule: '/list/card-list',
                Component: () => import('/containers/list/card-list'),
                name: '卡片列表',
                root: '首页',
            }
        ]
    },
    {
        rule: '/profile',
        name: '详情页',
        icon: 'profile',
        children: [
            {
                rule: '/profile/basic',
                Component: () => import('/containers/profile/basic'),
                name: '基础详情页',
                root: '首页',
            },
            {
                rule: '/profile/advanced',
                Component: () => import('/containers/profile/advanced'),
                name: '高级详情页',
                root: '首页',
            },
        ]
    },
    {
        rule: '/exception',
        name: '异常页',
        icon: 'warning',
        children: [
            {
                rule: '/exception/403',
                Component: () => import('/containers/exception/403.san'),
                name: '403',
                root: '首页',
            },
            {
                rule: '/exception/404',
                name: '404',
                Component: () => import('/containers/exception/404.san'),
                root: '首页',
            },
            {
                rule: '/exception/500',
                name: '500',
                Component: () => import('/containers/exception/500.san'),
                root: '首页',
            }
        ]
    },
    {
        rule: '/result',
        name: '结果页',
        icon: 'check-circle',
        children: [
            {
                rule: '/result/success',
                Component: () => import('/containers/result/success'),
                name: '成功页',
                root: '首页',
            },
            {
                rule: '/result/fail',
                name: '失败页',
                Component: () => import('/containers/result/fail'),
                root: '首页',
            },
        ]
    },
    {
        rule: '/account',
        name: '个人页',
        icon: 'user',
        children: [
            {
                rule: '/account/settings',
                Component: () => import('/containers/account/settings'),
                name: '个人设置',
                root: '首页',
            },
            {
                rule: '/account/center',
                Component: () => import('/containers/account/center'),
                name: '个人中心',
                root: '首页',
            }
        ]
    },
];
/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [];
