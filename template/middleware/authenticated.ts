import { UserInfo } from '~/store/user';
import { AuthHelper } from '~/plugins/firebase';

const protectedPathPrefix = '/my'

export default async function ({ isServer, store, req, redirect, route }) {
  if (isServer) {
    if (!req) return
    console.log('Server side auth is not support now')
  } else {
    const isSignedIn = store.state.user.isSignedIn
    const isPrivateRoute = route.matched.some(record => record.path == protectedPathPrefix)

    if (isSignedIn && route.name == 'login') redirect(protectedPathPrefix)
    if (!isSignedIn && isPrivateRoute) redirect('/login')
  }
}
