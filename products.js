import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// دالة لجلب المنتجات وعرضها
async function loadProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const productsContainer = document.getElementById("products-container");
  
  if (!productsContainer) return;
  productsContainer.innerHTML = ""; // تفريغ القائمة قبل التحميل

  querySnapshot.forEach((doc) => {
    const product = doc.data();
    
    // إنشاء كارت المنتج
    productsContainer.innerHTML += `
      <div class="product-card" style="border: 1px solid #ddd; padding: 15px; margin: 10px; border-radius: 8px;">
        <h3>${product.title || 'منتج بدون عنوان'}</h3>
        <p>السعر: <strong>${product.price || 0} $</strong></p>
        ${product.image ? `<img src="${product.image}" width="150" alt="${product.title}">` : ''}
      </div>
    `;
  });
}

// تشغيل الدالة عند فتح الصفحة
loadProducts();

