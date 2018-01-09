import Component from 'nuxt-class-component'
import { Vue } from 'nuxt-property-decorator'
import { auth } from '~/plugins/lib/firebase';

@Component({})
export default class Login extends Vue {
  async login() {
    const fireUser = await auth.signInAnonymously()
    this.$store.dispatch('user/authenticate', fireUser)
    this.$toast.success('logged in!!')
    this.$router.push('/my')
  }
}
