import { Vue, Component } from 'vue-property-decorator';
@Component
export default class LmLogin extends Vue {
  protected login() {
    this.$router.push({
      name: 'Login',
      query: {
        redirect: this.$route.fullPath,
      },
    });
  }
}
