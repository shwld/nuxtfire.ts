import { AuthHelper } from "~/plugins/firebase";

export default async ({store}) => {
  const fireUser = await AuthHelper.authenticate().catch(() => null)
  store.dispatch('user/authenticate', fireUser)
}
