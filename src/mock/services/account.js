import Mock from 'mockjs2';
import { builder, getQueryParameters } from '../util';

const totalCount = 5701;

const serverList = (options) => {
    const parameters = getQueryParameters(options);

    const result = [];
    const pageNo = parseInt(parameters.pageNo);
    const pageSize = parseInt(parameters.pageSize);
    const totalPage = Math.ceil(totalCount / pageSize);
    const key = (pageNo - 1) * pageSize;
    const next = (pageNo >= totalPage ? (totalCount % pageSize) : pageSize) + 1;

    for (let i = 1; i < next; i++) {
        const tmpKey = key + i;
        result.push({
            key: tmpKey,
            id: tmpKey,
            no: 'No ' + tmpKey,
            description: '这是一段描述',
            callNo: Mock.mock('@integer(1, 999)'),
            status: Mock.mock('@integer(0, 3)'),
            updatedAt: Mock.mock('@datetime'),
            editable: false
        });
    }

    return builder({
        pageSize: pageSize,
        pageNo: pageNo,
        totalCount: totalCount,
        totalPage: totalPage,
        data: result
    });
};

const projects = () => {
    return builder({
        'data': [{
            id: 1,
            cover: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
            title: 'Alipay',
            description: '那是一种内在的东西， 他们到达不了，也无法触及的',
            status: 1,
            updatedAt: '2018-07-26 00:00:00'
        },
        {
            id: 2,
            cover: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
            title: 'Angular',
            description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
            status: 1,
            updatedAt: '2018-07-26 00:00:00'
        },
        {
            id: 3,
            cover: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
            title: 'Ant Design',
            description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
            status: 1,
            updatedAt: '2018-07-26 00:00:00'
        },
        {
            id: 4,
            cover: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
            title: 'Ant Design Pro',
            description: '那时候我只会想自己想要什么，从不想自己拥有什么',
            status: 1,
            updatedAt: '2018-07-26 00:00:00'
        },
        {
            id: 5,
            cover: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
            title: 'Bootstrap',
            description: '凛冬将至',
            status: 1,
            updatedAt: '2018-07-26 00:00:00'
        },
        {
            id: 6,
            cover: 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
            title: 'Vue',
            description: '生命就像一盒巧克力，结果往往出人意料',
            status: 1,
            updatedAt: '2018-07-26 00:00:00'
        }
        ],
        'pageSize': 10,
        'pageNo': 0,
        'totalPage': 6,
        'totalCount': 57
    });
};

const teams = () => {
    return builder([{
        id: 1,
        name: '科学搬砖组',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
    },
    {
        id: 2,
        name: '程序员日常',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png'
    },
    {
        id: 1,
        name: '设计天团',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png'
    },
    {
        id: 1,
        name: '中二少女团',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png'
    },
    {
        id: 1,
        name: '骗你学计算机',
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png'
    }
    ]);
};

Mock.mock(/\/service/, 'get', serverList);
Mock.mock(/\/list\/search\/projects/, 'get', projects);
Mock.mock(/\/workplace\/teams/, 'get', teams);
