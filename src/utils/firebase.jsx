

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "fir-contact-app-e1bcb.firebaseapp.com",
  databaseURL: "https://fir-contact-app-e1bcb-default-rtdb.firebaseio.com",
  projectId: "fir-contact-app-e1bcb",
  storageBucket: "fir-contact-app-e1bcb.appspot.com",
  messagingSenderId: "164218103053",
  appId: "1:164218103053:web:99e5ce60194c0a0c987c44"
};


const firebase = initializeApp(firebaseConfig);

export default firebase;
// initialize ederken isim app idi biz app.js ile karismamasi icin firebase yaptik.