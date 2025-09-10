// firebase.js — modular wrapper for Firebase v9.6.5 (browser)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword as _signInWithEmailAndPassword,
  onAuthStateChanged as _onAuthStateChanged,
  signOut as _signOut,
  createUserWithEmailAndPassword as _createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";
import {
  getDatabase,
  ref as _ref,
  get as _get,
  set as _set,
  push as _push,
  onValue as _onValue,
  update as _update,
  query as _query,
  orderByChild as _orderByChild,
  serverTimestamp as _serverTimestamp,
} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";

/*
  GANTI nilai firebaseConfig sesuai Project Settings Anda
*/
const firebaseConfig = {
  apiKey: "AIzaSyBBzAN3ybPGr_GQEkCCEn2Sh-jB8mejfZI",
  authDomain: "docazza-3ab1a.firebaseapp.com",
  databaseURL: "https://docazza-3ab1a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "docazza-3ab1a",
  storageBucket: "docazza-3ab1a.firebasestorage.app",
  messagingSenderId: "863115710805",
  appId: "1:863115710805:web:5090c3d713566070891fdc",
  measurementId: "G-2SGBD9YQHZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export {
  app,
  auth,
  db,
  _signInWithEmailAndPassword as signInWithEmailAndPassword,
  _createUserWithEmailAndPassword as createUserWithEmailAndPassword,
  _onAuthStateChanged as onAuthStateChanged,
  _signOut as signOut,
  _ref as ref,
  _get as get,
  _set as set,
  _push as push,
  _onValue as onValue,
  _update as update,
  _query as query,
  _orderByChild as orderByChild,
  _serverTimestamp as serverTimestamp,
};
