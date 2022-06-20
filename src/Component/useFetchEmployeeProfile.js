import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firestore";

const useFetchEmployeeProfile = (searchQuery) => {
  const [document, setDocument] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

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
      console.log("clean up functiom which runs upon component re-render");
      return;
    };
  }, [searchQuery]);

  return { document, isLoading };
};
export default useFetchEmployeeProfile;
