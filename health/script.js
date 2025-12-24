// script.js (Health) - Enhanced with Modal Functionality

// =============================
// PRODUCT DATA
// =============================
let productsData = null;

// Load products data from JSON
async function loadProductsData() {
    try {
        const response = await fetch('products-data.json');
        const data = await response.json();
        productsData = data.products;
        console.log('Products data loaded successfully:', productsData.length, 'products');
    } catch (error) {
        console.error('Error loading products data:', error);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadProductsData();
    initializeModal();
});

// =============================
// WHATSAPP FUNCTIONALITY
// =============================
function contactWhatsApp(productName) {
    const phone = "573137774871";
    const message = encodeURIComponent(`Hola, estoy interesado en el producto de salud: ${productName}. ¿Me das más info?`);
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
}

// =============================
// MODAL FUNCTIONALITY
// =============================
let modalOverlay = null;
let currentProduct = null;

function initializeModal() {
    // Create modal HTML structure
    const modalHTML = `
        <div class="modal-overlay" id="productModal">
            <div class="modal-container">
                <button class="modal-close" onclick="closeModal()">&times;</button>
                
                <div class="modal-header">
                    <img class="modal-product-image" id="modalImage" src="" alt="">
                    <h2 class="modal-product-name" id="modalName"></h2>
                    <p class="modal-product-brand" id="modalBrand"></p>
                </div>
                
                <div class="modal-body">
                    <!-- Description Section -->
                    <div class="modal-section">
                        <h3 class="modal-section-title">Descripción</h3>
                        <p class="modal-description" id="modalDescription"></p>
                    </div>
                    
                    <!-- Pricing Section -->
                    <div class="modal-section">
                        <div class="modal-pricing">
                            <h4 class="modal-pricing-title">💰 Opciones de Compra</h4>
                            <div class="modal-pricing-options" id="modalPricing"></div>
                        </div>
                    </div>
                    
                    <!-- Benefits Section -->
                    <div class="modal-section">
                        <h3 class="modal-section-title">Beneficios Principales</h3>
                        <ul class="modal-benefits" id="modalBenefits"></ul>
                    </div>
                    
                    <!-- How to Use Section -->
                    <div class="modal-section">
                        <h3 class="modal-section-title">📌 Cómo Tomar</h3>
                        <div class="modal-howto">
                            <p class="modal-howto-text" id="modalHowTo"></p>
                        </div>
                    </div>
                </div>
                
                <div class="modal-footer">
                    <button class="modal-btn modal-btn-whatsapp" onclick="contactWhatsAppFromModal()">
                        💬 Pedir por WhatsApp
                    </button>
                    <button class="modal-btn modal-btn-secondary" onclick="closeModal()">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    `;

    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    modalOverlay = document.getElementById('productModal');

    // Close modal when clicking outside
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
}

function openProductModal(productId) {
    if (!productsData) {
        console.error('Products data not loaded yet');
        return;
    }

    // Find product by ID
    const product = productsData.find(p => p.id === productId);

    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    currentProduct = product;

    // Populate modal with product data
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalImage').alt = product.name;
    document.getElementById('modalName').textContent = product.name;
    document.getElementById('modalBrand').textContent = product.brand;
    document.getElementById('modalDescription').textContent = product.fullDesc;
    document.getElementById('modalHowTo').textContent = product.howToUse;

    // Populate pricing options
    const pricingContainer = document.getElementById('modalPricing');
    pricingContainer.innerHTML = '';

    const unitSavings = 0;
    const combo2Savings = ((product.prices.unit * 2) - product.prices.combo2);
    const combo3Savings = ((product.prices.unit * 3) - product.prices.combo3);

    const pricingOptions = [
        {
            label: 'Unidad',
            price: product.prices.unit,
            savings: null,
            featured: false
        },
        {
            label: 'Combo x2',
            price: product.prices.combo2,
            savings: combo2Savings,
            featured: true
        },
        {
            label: 'Combo x3',
            price: product.prices.combo3,
            savings: combo3Savings,
            featured: false
        }
    ];

    pricingOptions.forEach(option => {
        const optionHTML = `
            <div class="pricing-option ${option.featured ? 'featured' : ''}">
                <div class="pricing-label">${option.label}</div>
                <div class="pricing-amount">$${option.price.toLocaleString('es-CO')}</div>
                ${option.savings ? `<div class="pricing-savings">Ahorras $${option.savings.toLocaleString('es-CO')}</div>` : ''}
            </div>
        `;
        pricingContainer.insertAdjacentHTML('beforeend', optionHTML);
    });

    // Populate benefits
    const benefitsContainer = document.getElementById('modalBenefits');
    benefitsContainer.innerHTML = '';

    product.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        benefitsContainer.appendChild(li);
    });

    // Show modal with animation
    modalOverlay.style.display = 'flex';
    setTimeout(() => {
        modalOverlay.classList.add('active');
    }, 10);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');

    setTimeout(() => {
        modalOverlay.style.display = 'none';
        currentProduct = null;
        // Restore body scroll
        document.body.style.overflow = '';
    }, 300);
}

function contactWhatsAppFromModal() {
    if (currentProduct) {
        contactWhatsApp(currentProduct.name);
    }
}

