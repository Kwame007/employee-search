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

const useFetchData = (searchTearm) => {
  const [document, setDocument] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  // useEffect
  useEffect(() => {
    (async () => {
      try {
        let employeesArray = [];

        const querySnapshot = await getDocs(collection(db, "users"));

        // run if seach term available
        if (searchTearm) {
          querySnapshot.forEach((doc) => {
            if (doc.data().fullname.toLowerCase().includes(searchTearm)) {
              employeesArray.push({ id: doc.id, value: doc.data() });
              setDocument(employeesArray);
              console.log(doc.data());
            }
            setIsLoading(false);
          });
        } else {
          querySnapshot.forEach((doc) =>
            employeesArray.push({ id: doc.id, value: doc.data() })
          );
          setDocument(employeesArray);
          setIsLoading(false);

          console.log("inside useEffect");
        }
        // if (querySnapshot) {
        //   querySnapshot.forEach((doc) =>
        //     employeesArray.push({ id: doc.id, value: doc.data() })
        //   );
        //   setDocument(employeesArray);
        //   setIsLoading(false);
        // }
      } catch (error) {
        console.log(error.message);
      }
    })();
    return () => {
      console.log("clean up functiom");
    };
  }, [db]);
  console.log(document);
  return { document, isLoading };
};
export default useFetchData;
