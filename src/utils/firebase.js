import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwyTvBKtkuBzfD7kNAXRKArHq2-kkBbFM",
  authDomain: "fireblog-app-d88ad.firebaseapp.com",
  databaseURL: "https://fireblog-app-d88ad-default-rtdb.firebaseio.com",
  projectId: "fireblog-app-d88ad",
  storageBucket: "fireblog-app-d88ad.appspot.com",
  messagingSenderId: "710017742411",
  appId: "1:710017742411:web:06bcf50a31735a27da3fce",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;


