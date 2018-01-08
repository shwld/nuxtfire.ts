import { Vue } from 'nuxt-property-decorator'
import Component from 'nuxt-class-component'
import { AuthHelper } from '~/plugins/firebase';

@Component({})
export default class Default extends Vue {
  logout() {
    AuthHelper.signOut()
    this.$store.dispatch('user/signOut')
    this.$router.push('/login')
  }
}
