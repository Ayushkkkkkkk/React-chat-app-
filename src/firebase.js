import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2EtojFmOiAC7_Se5dLcBCN56Gs8ItcJU",
  authDomain: "chatappayushsccg.firebaseapp.com",
  projectId: "chatappayushsccg",
  storageBucket: "chatappayushsccg.appspot.com",
  messagingSenderId: "821917239891",
  appId: "1:821917239891:web:5c783d630ac99aa8bfd4a6"
};

export const app = initializeApp(firebaseConfig);