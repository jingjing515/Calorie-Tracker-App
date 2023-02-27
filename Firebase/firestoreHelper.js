import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { firestore } from "./firebase-setup";

export async function writeToDB(data) {
  // Add a new document with a generated id.
  try {
    const docRef = await addDoc(collection(firestore, "entries"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (err) {
    console.log(err);
  }
}

export async function deleteFromDB(deletedId) {
  try {
    await deleteDoc(doc(firestore, "entries", deletedId));
  } catch (err) {
    console.log(err);
  }
}
