import { db } from "../firebase-config";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Fungsi untuk menambahkan pesan ke Firestore
export const addMessage = async (name: string, email: string, message: string) => {
  try {
    await addDoc(collection(db, "messages"), { name, email, message });
    return { success: true };
  } catch (error) {
    console.error("Error adding message:", error);
    return { success: false, error };
  }
};

// Definisikan tipe Message
interface Message {
    id: string;
    name: string;
    email: string;
    message: string;
  }
  
  // Fungsi untuk mengambil semua pesan dari Firestore
  export const getMessages = async (): Promise<Message[]> => {
    try {
      const querySnapshot = await getDocs(collection(db, "messages"));
      const messages: Message[] = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name || "", // Default empty string jika data tidak ada
          email: data.email || "",
          message: data.message || "",
        };
      });
      return messages;
    } catch (error) {
      console.error("Error fetching messages:", error);
      return [];
    }
  };