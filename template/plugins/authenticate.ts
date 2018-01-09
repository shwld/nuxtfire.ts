import { authenticate as fireAuthenticate } from "~/plugins/lib/firebase";
import { IState } from "~/store/user";

export default async ({isClient, store}) => {
  if (isClient) {
    const isSignedIn: boolean = store.state.user.isSignedIn
    if (!isSignedIn) {
      const fireUser = await fireAuthenticate().catch(() => null)
      store.dispatch('user/authenticate', fireUser)
    }
    const user: IState = store.state.user
    return user
  }
}
