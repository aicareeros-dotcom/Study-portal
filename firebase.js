import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD9jDwVKcJQz_51XEmeOAWlq7cJnU5cac4",
  authDomain: "studyhub-db6e6.firebaseapp.com",
  projectId: "studyhub-db6e6",
  storageBucket: "studyhub-db6e6.appspot.com",
  messagingSenderId: "1009962944066",
  appId: "1:1009962944066:web:d73997a7b3e1109cf78fdb"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
