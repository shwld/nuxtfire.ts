import firebase from 'firebase'
import { FirebaseAuth, User } from '@firebase/auth-types'

if (!firebase.apps.length) {
  var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  }
  firebase.initializeApp(config)
}

// Fixme: will not use 'any'
const forcefirebase: any = firebase
const firebaseAuth: FirebaseAuth  = forcefirebase.auth()

export class AuthHelper {
  static authenticate(): Promise<User | null> {
    return new Promise((resolve, reject) => {
      firebaseAuth.onAuthStateChanged((user) => {
        resolve(user || null)
      })
    })
  }
  static signInAnonymously(): Promise<any> {
    return firebaseAuth.signInAnonymously()
  }
  static signOut(): Promise<any> {
    return firebaseAuth.signOut()
  }
}

export default firebase
