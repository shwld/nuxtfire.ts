import { User as FirebaseUser } from '@firebase/auth-types';

export class UserInfo {
  uid: string | null = null
  displayName: string | null = null

  constructor(user: FirebaseUser | null = null) {
    if (user != null) {
      this.uid = user.uid
      this.displayName = user.displayName
    }
  }
}

export interface IState {
  current: UserInfo | null,
  isSignedIn: boolean,
}

export const state = (): IState => ({
  current: new UserInfo(),
  isSignedIn: false,
})

export const mutations = {
  setCurrent(state, payload) {
    state.current = payload
    state.isSignedIn = payload.uid != null ? true : false
  },
}

export const actions = {
  async authenticate({commit}, payload: FirebaseUser): Promise<UserInfo> {
    const user = new UserInfo(payload)
    commit('setCurrent', user)
    return user
  },
  signOut ({commit}) {
    commit('setCurrent', new UserInfo())
  }
}
