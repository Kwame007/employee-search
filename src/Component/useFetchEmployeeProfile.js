import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};
const useFetchEmployeeProfile = (searchQuery) => {
  const [document, setDocument] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  // [initialize firebase]
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  // handles side effect in our code
  useEffect(() => {
    (async () => {
      try {
        let employeesArray = [];

        const querySnapshot = await getDocs(collection(db, "users"));

        // run if search query is true
        if (searchQuery && querySnapshot) {
          querySnapshot.forEach((doc) => {
            if (doc.id === searchQuery) {
              employeesArray.push({ id: doc.id, user: doc.data() });
              setDocument(employeesArray);
              setIsLoading(false);
              return;
            }
          });
        }

        console.log("inside useEffect");
      } catch (error) {
        console.log(error.message);
      }
    })();
    return () => {
      console.log("clean up functiom");
      return;
    };
  }, [db, searchQuery, document]);

  return { document, isLoading };
};
export default useFetchEmployeeProfile;
