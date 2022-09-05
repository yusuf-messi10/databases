import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBlamjzpCGEnszkFjIo6vtk_8FIL-KBcc0",
  authDomain: "uploading-f.firebaseapp.com",
  projectId: "uploading-f",
  storageBucket: "uploading-f.appspot.com",
  messagingSenderId: "546124608397",
  appId: "1:546124608397:web:a3dcac9a0cc18dc7a5c3c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const storage = getStorage(app)