import request from '@/lib/utils/request';

/**
 * 获取用户信息
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function getUserInfo() {
    return request({
        url: '/user/info',
        method: 'GET'
    });
};
