<template>
  <input
    id="file_selector"
    class="file_selector"
    type="file"
    accept="image/*"
    @change.prevent.stop="preview"
  >
</template>

<script lang='ts'>
export interface IUploader {
  preview: () => void;
  isImage: (fileName: string) => boolean;
  checkFileSize: (file: File) => boolean;
  upload: (file: File) => void;
}
import { Vue, Component, Emit } from 'vue-property-decorator';
import Upload from '@/lib/cos';
import { ISucessData } from '@/types/cos';
@Component
export default class LmUploader extends Vue implements IUploader {
  public preview() {
    const file = (this.$el as HTMLInputElement).files![0];
    if (this.checkFileSize(file)) {
      if (this.isImage(file.name)) {
        this.upload(file);
      } else {
        this.$toast('请选择图片文件');
      }
    } else {
      this.$toast('图片大小不能大于2M');
    }
  }
  public isImage(fileName: string) {
    if (fileName) {
      const suffixIndex = fileName.lastIndexOf('.');
      const suffix = fileName.substring(suffixIndex + 1, fileName.length).toLowerCase();
      return /bmp|png|jpg|jpeg/.test(suffix);
    } else {
      return false;
    }
  }

  public checkFileSize(file: File) {
    return file.size <= 2 * 1024 * 1024;
  }
  public upload(file: File) {
    const that = this;
    Upload(file, {
      onReady() {
        that.$toast.loading('上传中...');
      },
      onError() {
        that.$toast('上传失败，请重试！');
      },
      onSuccess(data: ISucessData) {
        that.onSuccess(`https://${data.Location}`);
      },
    });
  }

  @Emit('on-success')
  private onSuccess(location: string) {
    return location;
  }
}
</script>

<style lang="less" scoped>
.file_selector {
  opacity: 0;
  position: absolute;
  width: 96px;
  top: 0;
  right: 0;
  bottom: 0;
  user-select: none;
}
</style>
