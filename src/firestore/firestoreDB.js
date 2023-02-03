import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export async function getUsers() {
  try {
    const querySnapShot = await getDocs(collection(db, "users"));
    const use = querySnapShot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return use;
  } catch (error) {
    console.log("catch", error);
  }
}
