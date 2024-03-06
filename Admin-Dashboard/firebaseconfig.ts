import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDXscqqcEP_C6Sy8feeEmTaMOTPRGIINQY',
  authDomain: 'admin-dashboard-f757e.firebaseapp.com',
  projectId: 'admin-dashboard-f757e',
  storageBucket: 'admin-dashboard-f757e.appspot.com',
  messagingSenderId: '948282255558',
  appId: '1:948282255558:web:76e789f7a15a4b2a5f0fc7',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
