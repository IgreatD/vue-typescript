/*
 * @Author: IgreatD
 * @Date: 2019-05-07 10:27:08
 * @Last Modified by: IgreatD
 * @Last Modified time: 2019-05-08 14:23:31
 *
 *  axios封装
 */

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { getModule } from 'vuex-module-decorators';
import User from '@/store/user';

import errorMessage from '@/lib/res.message';

const user = getModule(User);

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
  method: 'post',
  headers: axiosHeader,
  timeout: 1000,
};

/**
 * axios请求类
 *
 * @class HttpRequest
 */
class HttpRequest {
  constructor(private queue: IQueue = {}) {}

  public create(options: AxiosRequestConfig) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptos(instance, options.url!);
    return instance(options);
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
  private interceptos(instance: AxiosInstance, url: string) {
    // 请求拦截
    instance.interceptors.request.use(
      (config) => {
        // 添加全局 loading
        if (!Object.keys(this.queue).length) {
          // show
        }
        // 添加全局token
        config.headers.Token = user.toekn;
        this.queue[url] = true;
        return config;
      },
      (error) => Promise.reject(error),
    );
    instance.interceptors.response.use(
      (res) => {
        this.destroy(url);
        const { data } = res;
        switch (data.Code) {
          case 1:
          case 2:
          case -1:
            return data;
          case -6:
          case -7:
          case -8:
          case -9:
            res.status = -1;
            return Promise.reject(res);
          default:
            return Promise.reject(res);
        }
      },
      (error) => {
        // token错误，重新刷新token
        if (error.response.status === -1) {
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
                  errorMessage(error);
                });
            }
          }
          const retryOriginalRequest = new Promise((resolve) => {
            addSubscriber((accessToken) => {
              error.config.headers.Token = accessToken;
              resolve(instance(error.config));
            });
          });
          return retryOriginalRequest;
        } else {
          errorMessage(error);
        }
        return Promise.reject(error);
      },
    );
  }
}

export default HttpRequest;
