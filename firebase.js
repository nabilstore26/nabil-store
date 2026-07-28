import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// كود إعدادات Firebase الخاص بمشروع Nabil-Biznes
const firebaseConfig = {
  apiKey: "AIzaSyDo-3mcY6X602sQDTCev-OZG2MK7eWLYoE",
  authDomain: "nabil-biznes.firebaseapp.com",
  projectId: "nabil-biznes",
  storageBucket: "nabil-biznes.firebasestorage.app",
  messagingSenderId: "389434271966",
  appId: "1:389434271966:web:910c029ed8ecf06e4c3a4",
  measurementId: "G-KZPD4JRQ5G"
};

// تهيئة تطبيق Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

// تصدير العناصر لاستخدامها في باقي ملفات المشروع
export { app, analytics };
export default app;

