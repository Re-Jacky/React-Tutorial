import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { createStore, combineReducers, compose } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';
import { notifyReducer } from './reducers/notifyReducer';
import { settingReducer } from './reducers/settingReducer';

const firebaseConfig = {
    apiKey: "AIzaSyBu1MltwmQkl_BRwlp9Mv5mNshEy_vDE-c",
    authDomain: "react-client-panel-c0f37.firebaseapp.com",
    databaseURL: "https://react-client-panel-c0f37.firebaseio.com",
    projectId: "react-client-panel-c0f37",
    storageBucket: "react-client-panel-c0f37.appspot.com",
    messagingSenderId: "936342320055",
    appId: "1:936342320055:web:e7ae482630e72a48e06e32"
  };

  // react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }
  
// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer, // <- needed if using firestore
    notify: notifyReducer,
    settings: settingReducer
  })
  
  // Create store with reducers and initial state

if (localStorage.getItem('settings') == null){
  localStorage.setItem('settings', JSON.stringify({    
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false
  }
  ))
}
const initialState = {
  settings: JSON.parse(localStorage.getItem('settings'))
}

const store = createStore(rootReducer, initialState,compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
  
export const rrfProps = {
firebase,
config: rrfConfig,
dispatch: store.dispatch,
createFirestoreInstance // <- needed if using firestore
}

export default store;

// import { createStore, combineReducers, compose } from 'redux';
// import { reduxFirestore, firestoreReducer } from 'redux-firestore';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';
// import 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyBu1MltwmQkl_BRwlp9Mv5mNshEy_vDE-c",
//     authDomain: "react-client-panel-c0f37.firebaseapp.com",
//     databaseURL: "https://react-client-panel-c0f37.firebaseio.com",
//     projectId: "react-client-panel-c0f37",
//     storageBucket: "react-client-panel-c0f37.appspot.com",
//     messagingSenderId: "936342320055",
//     appId: "1:936342320055:web:e7ae482630e72a48e06e32"
// }; // from Firebase Console
// const rfConfig = {}; // optional redux-firestore Config Options

// // Initialize firebase instance
// firebase.initializeApp(firebaseConfig);
// // Initialize Cloud Firestore through Firebase
// firebase.firestore();

// // Add reduxFirestore store enhancer to store creator
// const createStoreWithFirebase = compose(
//   reduxFirestore(firebase, rfConfig),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )(createStore);

// // Add Firebase to reducers
// const rootReducer = combineReducers({
//   firestore: firestoreReducer,
// });

// // Create store with reducers and initial state
// const initialState = {};
// const store = createStoreWithFirebase(rootReducer, initialState);


// export default store;