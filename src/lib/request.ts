/*
 * @Author: IgreatD
 * @Date: 2019-05-07 10:27:08
 * @Last Modified by: IgreatD
 * @Last Modified time: 2019-05-14 15:46:34
 *
 *  axios封装
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { IBaseModel } from '@/types/models';

import user from '@/store/modules/user';

import errorMessage from '@/lib/res.message';

let isAlreadyFetchingAccessToken = false;

let subscribers: any[] = [];

function onAccessTokenFetched(accessToken: string) {
  subscribers = subscribers.filter((callback) => callback(accessToken));
}

function addSubscriber(callback: (callback: string) => void) {
  subscribers.push(callback);
}

interface IAxiosHeader {
  [prop: string]: string;
}

interface IQueue {
  [prop: string]: boolean;
}

const axiosHeader: IAxiosHeader = {
  'Content-type': 'application/json',
};

const axiosConfig: AxiosRequestConfig = {
  headers: axiosHeader,
  timeout: 1000,
  // transformResponse: (res: AxiosResponse<IBaseModel<any>>) => res,
};

/**
 * axios请求类
 *
 * @class HttpRequest
 */
class HttpRequest {
  constructor(private queue: IQueue = {}) {}

  public create<T>(options: AxiosRequestConfig) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    options.url = `/api/ft${options.url}`;
    this.interceptors(instance, options.url!);
    console.warn('请求地址: ', options.url);
    console.warn('请求数据: ', options.data);
    return instance.request<T>(options);
  }

  /**
   * 请求结束
   *
   * @param {string} url 请求地址
   * @memberof HttpRequest
   */
  public destroy(url: string) {
    delete this.queue[url];
    if (!Object.keys(this.queue).length) {
      // hide
    }
  }

  /**
   * @description axios内部配置
   *
   * @returns axios配置
   * @memberof HttpRequest
   */
  private getInsideConfig() {
    const config = {
      headers: axiosConfig,
      method: 'post',
    };
    return config;
  }

  /**
   * 请求、响应拦截
   *
   * @param {AxiosInstance} instance axios实例
   * @param {string} url 请求地址
   * @memberof HttpRequest
   */
  private interceptors(instance: AxiosInstance, url: string) {
    // 请求拦截
    instance.interceptors.request.use(
      (config) => {
        // 添加全局 loading
        if (!Object.keys(this.queue).length) {
          // show
        }
        // 添加全局token
        config.headers.Token = user.token;
        // config.transformResponse = (res: AxiosResponse<IBaseModel<any>>) => res;
        this.queue[url] = true;
        return config;
      },
      (error) => Promise.reject(error),
    );
    instance.interceptors.response.use(
      (res) => {
        res.request.transformResponse = (r: IBaseModel) => r;
        this.destroy(url);
        const { data } = res;
        console.warn('请求响应: ', data);
        switch (data.Code) {
          case 1:
          case 2:
            return res;
          case -6:
          case -7:
          case -8:
          case -9:
            this.refreshToken(res);
            return Promise.reject(res);
          default:
            return Promise.reject(res);
        }
      },
      (error) => {
        errorMessage(error);
        return Promise.reject(error);
      },
    );
  }

  /**
   * @description token错误，重新刷新token
   * @private
   * @param {AxiosResponse} res
   * @returns
   * @memberof HttpRequest
   */
  private refreshToken(res: AxiosResponse) {
    if (!isAlreadyFetchingAccessToken) {
      isAlreadyFetchingAccessToken = true;
      const userName = user.userName;
      const password = user.password;
      if (userName && password) {
        user
          .getUserToken()
          .then((accessToken: string) => {
            isAlreadyFetchingAccessToken = false;
            onAccessTokenFetched(accessToken);
          })
          .catch(() => {
            errorMessage(res.request);
          });
      }
    }
    const retryOriginalRequest = new Promise((resolve) => {
      addSubscriber((accessToken) => {
        res.config.headers.Token = accessToken;
        resolve(this.create(res.config));
      });
    });
    return retryOriginalRequest;
  }
}

export default HttpRequest;
