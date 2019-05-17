/*
 * @Author: IgreatD
 * @Date: 2019-05-07 10:27:08
 * @Last Modified by: IgreatD
 * @Last Modified time: 2019-05-16 17:07:48
 *
 *  axios封装
 */

import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosPromise,
  Canceler,
} from 'axios';
import { Toast } from 'vant';
import { IBaseModel } from '@/types/models';

import user from '@/store/modules/user';

import errorMessage from '@/lib/res.message';

interface IAxiosHeader {
  [prop: string]: string;
}

interface IQueue {
  [prop: string]: boolean;
}

const axiosConfig: IAxiosHeader = {
  'Content-type': 'application/json',
};

interface IPending {
  url: string;
  c: Canceler;
}

/**
 * axios请求类
 *
 * @class HttpRequest
 */
class HttpRequest {
  private isAlreadyFetchingAccessToken = false;

  private subscribers: any[] = [];

  private pending: IPending[] = [];

  private cancelToken = axios.CancelToken;

  constructor(private queue: IQueue = {}) {}

  public create<T>(options: AxiosRequestConfig) {
    const instance = axios.create(this.getInsideConfig());
    if (!/api/.test(options.url!)) {
      options.url = `/api/ft${options.url}`;
    }
    this.interceptors(instance, options.url!);
    console.log('请求地址: ', options.url);
    console.log('请求数据: ', options.data);
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
      this.showDialog(false);
    }
  }

  /**
   * @description axios内部配置
   *
   * @returns axios配置
   * @memberof HttpRequest
   */
  private getInsideConfig() {
    return {
      headers: axiosConfig,
      timeout: 4000,
      method: 'post',
    };
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
          this.showDialog(true);
        }
        this.removePending(config);
        config.cancelToken = new this.cancelToken((c) => {
          this.pending.push({
            url,
            c,
          });
        });
        // 添加全局token
        if (user.auth) {
          config.headers.Token = user.auth.token;
        }
        // config.transformResponse = (res: AxiosResponse<IBaseModel<any>>) => res;
        this.queue[url] = true;
        return config;
      },
      (error) => Promise.reject(error),
    );
    instance.interceptors.response.use(
      (res) => {
        this.removePending(res.config);
        res.request.transformResponse = (r: IBaseModel) => r;
        this.destroy(url);
        const { data } = res;
        console.log('请求响应: ', data);
        switch (data.Code) {
          case 1:
          case 2:
            return res;
          case -6:
          case -7:
          case -8:
          case -9:
            return this.refreshToken(res);
          default:
            return Promise.reject(res);
        }
      },
      (error) => {
        this.destroy(url);
        errorMessage(error);
        Toast(error.message);
        console.log(error.message);
        // return Promise.reject(error);
        return { data: {} };
      },
    );
  }

  private onAccessTokenFetched(accessToken: string) {
    this.subscribers = this.subscribers.filter((callback) => callback(accessToken));
  }

  private addSubscriber(callback: (callback: string) => void) {
    this.subscribers.push(callback);
  }

  /**
   * @description token错误，重新刷新token
   * @private
   * @param {AxiosResponse} res
   * @returns
   * @memberof HttpRequest
   */
  private refreshToken(res: AxiosResponse) {
    if (!this.isAlreadyFetchingAccessToken) {
      this.isAlreadyFetchingAccessToken = true;
      user
        .getUserToken()
        .then((accessToken) => {
          this.isAlreadyFetchingAccessToken = false;
          this.onAccessTokenFetched(accessToken);
        })
        .catch(() => {
          errorMessage(res.request);
        });
    }
    const retryOriginalRequest = new Promise((resolve) => {
      this.addSubscriber((accessToken) => {
        resolve(this.create(res.config));
      });
    });
    return retryOriginalRequest as AxiosPromise;
  }

  private removePending(config: AxiosRequestConfig) {
    for (const p of this.pending) {
      if (p.url === config.url) {
        p.c();
        this.pending.splice(this.pending.indexOf(p), 1);
      }
    }
  }

  private showDialog(flag: boolean) {
    flag ? Toast.loading() : Toast.clear();
  }
}

export default HttpRequest;
