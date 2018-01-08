import Component from 'nuxt-class-component'
import { Vue } from 'nuxt-property-decorator'
import { AuthHelper } from '~/plugins/firebase';

@Component({})
export default class Login extends Vue {
  async login() {
    await AuthHelper.signInAnonymously()
    this.$store.dispatch('user/authenticate', user)
    this.$toast.success('logged in!!')
    this.$router.push('/my')
  }
}
