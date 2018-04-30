import { LanguageType } from 'store/reducers/locale/langugeType'

export const environment = {
  firebase: {
    apiKey: 'AIzaSyBxnWzD0mYK1DkarQN7jDaKe1eNaqDATK8',
    authDomain: 'react-social-7e0e6.firebaseapp.com',
    databaseURL: 'https://react-social-7e0e6.firebaseio.com',
    projectId: 'react-social-7e0e6',
    storageBucket: 'react-social-7e0e6.appspot.com',
    messagingSenderId: '682485082986'
  },
  settings: {
    enabledOAuthLogin: true,
    appName: 'Green',
    defaultProfileCover: 'https://firebasestorage.googleapis.com/v0/b/open-social-33d92.appspot.com/o/images%2F751145a1-9488-46fd-a97e-04018665a6d3.JPG?alt=media&token=1a1d5e21-5101-450e-9054-ea4a20e06c57',
    defaultLanguage: LanguageType.English
  },
  theme: {
    primaryColor: '#00b1b3',
    secondaryColor: '#4d545d'
  }
}
