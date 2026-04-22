// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOpBaigNFbxw2XAHftbQoI4UCY3ggQL88",
  authDomain: "gnagsaserbisyo-25695.firebaseapp.com",
  projectId: "gnagsaserbisyo-25695",
  storageBucket: "gnagsaserbisyo-25695.appspot.com",
  messagingSenderId: "546907478882",
  appId: "1:546907478882:web:6e575875943b0ad8126a3b",
  measurementId: "G-GQQY9GMSFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  


