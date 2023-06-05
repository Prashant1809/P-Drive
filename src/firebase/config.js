// import { initializeApp } from "firebase/app";
// import "firebase/storage";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCQRkM94DyekkTFMbAtDtOiAhubxAPQfCQ",
//   authDomain: "pc-gram.firebaseapp.com",
//   projectId: "pc-gram",
//   storageBucket: "pc-gram.appspot.com",
//   messagingSenderId: "405652304412",
//   appId: "1:405652304412:web:756ee27166688a26b325d9",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const projectStorage = app.storage();
// const projectFirestore = app.firestore();

// export { projectStorage, projectFirestore };
// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
// import { getFirestore,  FieldValue} from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCQRkM94DyekkTFMbAtDtOiAhubxAPQfCQ",
//   authDomain: "pc-gram.firebaseapp.com",
//   projectId: "pc-gram",
//   storageBucket: "pc-gram.appspot.com",
//   messagingSenderId: "405652304412",
//   appId: "1:405652304412:web:756ee27166688a26b325d9",
// };

// const app = initializeApp(firebaseConfig);

// const projectStorage = getStorage(app);
// const projectFirestore = getFirestore(app);
// const timestamp = FieldValue.serverTimestamp;

// export { projectStorage, projectFirestore, timestamp };

//rphit
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQRkM94DyekkTFMbAtDtOiAhubxAPQfCQ",
  authDomain: "pc-gram.firebaseapp.com",
  projectId: "pc-gram",
  storageBucket: "pc-gram.appspot.com",
  messagingSenderId: "405652304412",
  appId: "1:405652304412:web:756ee27166688a26b325d9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };