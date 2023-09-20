import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCl8QRujG-4ge_etvIjdnsd7uCNx4KR7d4",
  authDomain: "ecommerce-app-45.firebaseapp.com",
  projectId: "ecommerce-app-45",
  storageBucket: "ecommerce-app-45.appspot.com",
  messagingSenderId: "520280868131",
  appId: "1:520280868131:web:2541fe5036d906dfc9b896"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;