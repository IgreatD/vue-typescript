/*
 * @Author: IgreatD
 * @Date: 2018-11-16 09:40:46
 * @Last Modified by: IgreatD
 * @Last Modified time: 2019-05-16 15:07:11
 *
 * 腾讯云对象存储签名获取以及文件上传
 */
import COS from 'cos-js-sdk-v5';
import { currentDate } from '@/lib/date';
import user from '@/store/modules/user';
import axios from 'axios';
import { Toast } from 'vant';
import { UploadCallback, IProgressData, ISucessData, OptionsTypes } from '@/types/cos';
import cosConfig from '@/config/cos';
/**
 * @description 创建 cos 对象实例
 */
const cos = new COS({
  /**
   * @description 获取 cos 签名
   * @param {options} 获取临时秘钥需要传入的参数对象
   * @param {callback} 临时秘钥获取成功的回调
   */
  getAuthorization: async (options: OptionsTypes, callback: any) => {
    // 异步获取签名
    await axios
      .get('/cos')
      .then((data) => {
        callback({
          TmpSecretId: data.data.TmpSecretId,
          TmpSecretKey: data.data.TmpSecretKey,
          XCosSecurityToken: data.data.XCosSecurityToken,
          ExpiredTime: data.data.ExpiredTime,
        });
      })
      .catch(() => {
        Toast('上传失败，请重试！');
      });
  },
});

/**
 * @description 文件上传
 * @export
 * @param {File} file 需要上传的文件
 * @param {UploadCallback} callback 文件上传过程的回调
 */
export default function upload(file: File, callback: UploadCallback) {
  cos.sliceUploadFile(
    {
      Bucket: cosConfig.Bucket,
      Region: cosConfig.Region,
      Key: `ft/${(user.userInfo && user.userInfo.AccountID) || '0000'}/${currentDate}/${file.name}`,
      Body: file,
      onTaskReady: () => {
        callback.onReady();
      },
      onProgress: (progressData: IProgressData) => {
        if (callback.onProgress) {
          callback.onProgress(progressData);
        }
      },
    },
    (err: any, data: ISucessData) => {
      if (err) {
        console.log(err);
        callback.onError();
      } else {
        callback.onSuccess(data);
      }
      if (callback.onComplete) {
        callback.onComplete();
      }
    },
  );
}
