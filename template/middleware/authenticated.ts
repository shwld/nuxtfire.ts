import { Route } from 'vue-router'
import { UserInfo } from '~/store/user';

const protectedPathPrefix = '/my'

export default async function ({ isServer, store, req, redirect, route }) {
  if (isServer && !req) return
  const user: UserInfo = await store.dispatch('user/authenticate')
  const isPrivateRoute = route.matched.some(record => record.path == protectedPathPrefix)

  if (user.isSignedIn && route.name == 'login') redirect(protectedPathPrefix)
  if (!user.isSignedIn && isPrivateRoute) redirect('/login')
}

