import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firestore";

const useFetchData = (searchTearm) => {
  const [document, setDocument] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

          //console.log("inside useEffect");
        }
      } catch (error) {
        console.log(error.message);
      }
    })();

    return () => {
      console.log("clean up functiom");
    };
  }, [searchTearm]);

  return { document, isLoading };
};
export default useFetchData;
