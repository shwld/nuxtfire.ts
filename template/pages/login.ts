import Component from 'nuxt-class-component'
import { Vue } from 'nuxt-property-decorator'

@Component({})
export default class Login extends Vue {
  async login() {
    await this.$store.dispatch('user/signInAnonymously')
    this.$toast.success('logged in!!')
    this.$router.push('/my')
  }
}
