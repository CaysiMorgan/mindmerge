import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  // Your Firebase configuration
};

firebase.initializeApp(firebaseConfig);

export default firebase;