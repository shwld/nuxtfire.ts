import { Vue } from 'nuxt-property-decorator'
import Component from 'nuxt-class-component'
import { auth } from '~/plugins/lib/firebase';

@Component({})
export default class Default extends Vue {
  logout() {
    auth.signOut()
    this.$store.dispatch('user/signOut')
    this.$router.push('/login')
  }
}
