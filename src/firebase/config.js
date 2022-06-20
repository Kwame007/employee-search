import { initializeApp } from "firebase/app";

// firebase
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_measurementId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBc23W-fRvv8NgzD4jvVvBvw4X_wWr4JuY",
  authDomain: "user-search-95e12.firebaseapp.com",
  projectId: "user-search-95e12",
  storageBucket: "user-search-95e12.appspot.com",
  messagingSenderId: "1079007921876",
  appId: "1:1079007921876:web:33ed279e12bcf825651d41",
  measurementId: "G-2QNHWW2D56",
};
// [initialize firebase]
const app = initializeApp(firebaseConfig);

export default app;
