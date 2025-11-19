// script.js

// Función para redirigir a WhatsApp con mensaje personalizado
function contactWhatsApp(productName) {
  const phone = "573137774871"; // Tu número (sin el +)
  const message = encodeURIComponent(`Hola, estoy interesado en la oferta de ${productName} que vi en la página web. ¿Me das más info?`);
  const url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, '_blank');
}

// Toggle Theme (Opcional si quieres mantenerlo)
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});