import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// --- HARDCODE CONFIGURATION (Supaya 100% Terbaca) ---
const firebaseConfig = {
  apiKey: "AIzaSyBndGcEMijoRpRdfGJv_8wwZ5HgMhW0QB8",
  authDomain: "duel-links-catalog.firebaseapp.com",
  projectId: "duel-links-catalog",
  storageBucket: "duel-links-catalog.firebasestorage.app",
  messagingSenderId: "642648841652",
  appId: "1:642648841652:web:c09f3d643e9c0f484fe6e1",
  measurementId: "G-HLCNRFZPKN"
};

// 1. Inisialisasi App (Cek biar gak double)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// 2. Export Service
export const auth = getAuth(app);
export const db = getFirestore(app);

// 3. Tentukan Nama Folder di Database (Pake Project ID aja biar aman)
export const appId = "duel-links-catalog";

// 4. Fungsi Login
export const initFirebase = async () => {
  if (!auth.currentUser) {
    console.log("🔌 Connecting to Firebase...");
    try {
        await signInAnonymously(auth);
        console.log("✅ Connected to Firebase!");
    } catch (error) {
        console.error("❌ Auth Error:", error);
        alert("Gagal konek ke Firebase. Cek Console.");
    }
  }
};