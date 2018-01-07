import { Vue } from 'nuxt-property-decorator'
import Component from 'nuxt-class-component'
import { UserInfo } from '~/store/user';

@Component({})
export default class Index extends Vue {
  get currentUser(): UserInfo {
    return this.$store.state.user.current
  }
}
