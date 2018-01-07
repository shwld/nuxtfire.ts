import { AuthHelper } from '~/plugins/firebase'
import { User as FirebaseUser } from '@firebase/auth-types';

export class UserInfo {
  uid: string | null = null
  displayName: string | null = null
  isSignedIn: boolean = false

  constructor(user: FirebaseUser | null = null) {
    if (user != null) {
      this.uid = user.uid
      this.displayName = user.displayName
      this.isSignedIn = true
    }
  }
}

export interface IState {
  current: UserInfo | null,
}

export const state = (): IState => ({
  current: new UserInfo(),
})

export const mutations = {
  setCurrent(state, payload) {
    state.current = payload
  }
}

export const actions = {
  async authenticate({commit}): Promise<UserInfo> {
    const fireUser = await AuthHelper.authenticate()
    const user = new UserInfo(fireUser)
    commit('setCurrent', user)
    return user
  },
  async signInAnonymously({commit}) {
    await AuthHelper.signInAnonymously()
  },
  signOut ({commit}) {
    AuthHelper.signOut()
    commit('setCurrent', new UserInfo())
  }
}
