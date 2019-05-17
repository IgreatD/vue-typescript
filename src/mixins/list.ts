import { List } from 'vant';
import { Vue, Component } from 'vue-property-decorator';
@Component({
  components: {
    [List.name]: List,
  },
})
class LmList extends Vue {
  public pageIndex = 0;
  public pageSize = 10;
  protected loading = false;
  protected finished = false;
  protected error = false;
  protected errorText = '暂无数据，点击重新加载';
  protected completeLoad(total: number) {
    this.loading = false;
    if (this.pageSize > total) {
      this.finished = true;
    } else {
      this.pageIndex = this.pageIndex + 1;
    }
  }
  protected errorLoad() {
    this.loading = false;
    this.error = true;
  }
}

export default LmList;
