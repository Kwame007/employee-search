import { getFirestore } from "firebase/firestore";
import app from "../firebase/config";

// firebase firestore
export const db = getFirestore(app);
