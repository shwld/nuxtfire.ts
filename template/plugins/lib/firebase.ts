import originalFirebase from 'firebase'
import { FirebaseAuth, User } from '@firebase/auth-types'

if (!originalFirebase.apps.length) {
  var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  }
  originalFirebase.initializeApp(config)
}

// Fixme: will not use 'any'
const forcefirebase: any = originalFirebase

export const auth: FirebaseAuth  = forcefirebase.auth()

export const authenticate = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      resolve(user || null)
    })
  })
}

export const firebase = originalFirebase
