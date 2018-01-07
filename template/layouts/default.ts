import { Vue } from 'nuxt-property-decorator'
import Component from 'nuxt-class-component'

@Component({})
export default class Default extends Vue {
  async logout() {
    await this.$store.dispatch('user/signOut')
    this.$router.push('/login')
  }
}
