/**
 * @description 获取 cos 临时秘钥的参数
 * @export
 * @interface OptionsTypes
 */
export interface OptionsTypes {
  /**
   * @description 存储桶名称
   * @type {string}
   * @memberof OptionsTypes
   */
  Bucket: string;

  /**
   * @description 区域
   * @type {string}
   * @memberof OptionsTypes
   */
  Region: string;
}

/**
 * @description 文件上传过程的参数
 * @export
 * @interface IProgressData
 */
export interface IProgressData {
  /**
   * @description 已经上传的部分大小
   * @type {number}
   * @memberof IProgressData
   */
  loaded: number;

  /**
   * @description 文件总大小
   * @type {number}
   * @memberof IProgressData
   */
  total: number;

  /**
   * @description 文件上传速度
   * @type {number}
   * @memberof IProgressData
   */
  speed: number;

  /**
   * @description 文件上传百分比
   * @type {number}
   * @memberof IProgressData
   */
  percent: number;
}

/**
 * @description 文件上传成功参数
 * @export
 * @interface ISucessData
 */
export interface ISucessData {
  /**
   * @description 文件在 cos 中的 url
   * @type {string}
   * @memberof ISucessData
   */
  Location: string;
}

/**
 * @description 文件上传过程回调
 * @export
 * @interface UploadCallback
 */
export interface UploadCallback {
  /**
   * @description 上传准备完成
   * @memberof UploadCallback
   */
  onReady: () => void;

  /**
   * @description 上传进度
   * @param {progressData} 上传进度参数对象
   * @memberof UploadCallback
   */
  onProgress?: (progressData: IProgressData) => void;

  /**
   * @description 上传完成，成功或者失败之后调用
   * @memberof UploadCallback
   */
  onComplete?: () => void;

  /**
   * @description 上传失败
   * @memberof UploadCallback
   */
  onError: () => void;

  /**
   * @description 上传成功
   * @param {data} 上传成功之后的回调参数
   * @memberof UploadCallback
   */
  onSuccess: (data: ISucessData) => void;
}
