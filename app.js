const translations = {
  es: {
    "nav-why": "¿Por qué nosotros?",
    "nav-products": "Productos",
    "nav-coverage": "Cobertura",
    "nav-cta": "Solicitar cotización",
    "hero-title": "El sabor <em>de LatAm</em> en tus anaqueles",
    "hero-subtitle": "Distribuimos todo tipo de alimentos latinos a supermercados y tiendas en todo Estados Unidos. Variedad, calidad y entrega confiable — todo en un solo proveedor.",
    "hero-btn-quote": "Solicitar cotización",
    "hero-btn-catalog": "Ver catálogo",
    "metric-states": "ESTADOS CUBIERTOS",
    "metric-products": "PRODUCTOS",
    "metric-owned": "LATINO-OWNED",
    "why-eyebrow": "¿POR QUÉ ELEGIRNOS?",
    "why-title": "Tu proveedor latino <em>de confianza</em>",
    "why-desc": "Llevamos el auténtico sabor latinoamericano directamente a tus anaqueles con rapidez, variedad y servicio personalizado.",
    "feat1-title": "Variedad completa.",
    "feat1-desc": "Más de 500 productos latinos — desde abarrotes hasta bebidas, snacks, condimentos y más. Todo en un solo pedido.",
    "feat2-title": "Entrega nacional.",
    "feat2-desc": "Distribuimos a supermercados y tiendas en todo EE.UU. con rutas optimizadas y tiempos de entrega garantizados.",
    "feat3-title": "100% Latino-owned.",
    "feat3-desc": "Entendemos tu negocio porque somos parte de la comunidad. Hablamos tu idioma y conocemos los productos que tus clientes buscan.",
    "feat4-title": "Pedidos flexibles.",
    "feat4-desc": "Sin mínimos absurdos. Adaptamos el volumen, la frecuencia y las condiciones de pago a las necesidades de tu negocio.",
    "cat-eyebrow": "CATÁLOGO",
    "cat-title": "Todo lo que tu tienda <em>necesita</em>",
    "cat-desc": "Productos auténticos de México, Centroamérica, el Caribe y Sudamérica — seleccionados para el mercado hispano en EE.UU.",
    "cat1": "Abarrotes",
    "cat2": "Bebidas",
    "cat3": "Salsas y condimentos",
    "cat4": "Snacks y dulces",
    "cat5": "Frijoles y granos",
    "cat6": "Limpieza del hogar",
    "cat7": "Enlatados",
    "cat8": "Tortillas y masas",
    "cov-eyebrow": "COBERTURA NACIONAL",
    "cov-title": "Llegamos a donde <em>están tus clientes</em>",
    "cov-desc": "Distribución activa en los principales mercados hispanos de Estados Unidos, con capacidad de expansión nacional.",
    "state-more": "<i></i>+ más estados",
    "ft-eyebrow": "TRABAJA CON NOSOTROS",
    "ft-title": "¿Listo para llenar <em>tus anaqueles</em>?",
    "ft-desc": "Déjanos tu correo y un representante te contactará en menos de 24 horas con una cotización personalizada.",
    "form-email": "Correo electrónico",
    "form-email-ph": "tu@tienda.com",
    "form-business": "Nombre de tu negocio",
    "form-business-ph": "Nombre de tu negocio",
    "form-btn": "Solicitar cotización →",
    "ft-direct": "O escríbenos directamente a",
    "ft-copyright": "© 2025 LatAm Foods LLC. All rights reserved."
  },
  en: {
    "nav-why": "Why us?",
    "nav-products": "Products",
    "nav-coverage": "Coverage",
    "nav-cta": "Request Quote",
    "hero-badge": "NATIONAL DISTRIBUTOR - USA",
    "hero-title": "The <em>LatAm</em> flavor on your shelves",
    "hero-subtitle": "We distribute all kinds of Latin foods to supermarkets and stores across the United States. Variety, quality, and reliable delivery — all from a single supplier.",
    "hero-btn-quote": "Request Quote",
    "hero-btn-catalog": "View Catalog",
    "metric-states": "STATES COVERED",
    "metric-products": "PRODUCTS",
    "metric-owned": "LATINO-OWNED",
    "why-eyebrow": "WHY CHOOSE US?",
    "why-title": "Your <em>trusted</em> Latino supplier",
    "why-desc": "We bring authentic Latin American flavor directly to your shelves with speed, variety, and personalized service.",
    "feat1-title": "Complete variety.",
    "feat1-desc": "Over 500 Latin products — from groceries to beverages, snacks, condiments, and more. All in a single order.",
    "feat2-title": "National delivery.",
    "feat2-desc": "We distribute to supermarkets and stores across the USA with optimized routes and guaranteed delivery times.",
    "feat3-title": "100% Latino-owned.",
    "feat3-desc": "We understand your business because we are part of the community. We speak your language and know the products your customers are looking for.",
    "feat4-title": "Flexible orders.",
    "feat4-desc": "No absurd minimums. We adapt volume, frequency, and payment terms to your business needs.",
    "cat-eyebrow": "CATALOG",
    "cat-title": "Everything your store <em>needs</em>",
    "cat-desc": "Authentic products from Mexico, Central America, the Caribbean, and South America — selected for the Hispanic market in the USA.",
    "cat1": "Groceries",
    "cat2": "Beverages",
    "cat3": "Sauces & Condiments",
    "cat4": "Snacks & Sweets",
    "cat5": "Beans & Grains",
    "cat6": "Household Cleaning",
    "cat7": "Canned Goods",
    "cat8": "Tortillas & Doughs",
    "cov-eyebrow": "NATIONAL COVERAGE",
    "cov-title": "We reach where <em>your customers are</em>",
    "cov-desc": "Active distribution in major Hispanic markets in the United States, with national expansion capability.",
    "state-more": "<i></i>+ more states",
    "ft-eyebrow": "WORK WITH US",
    "ft-title": "Ready to stock <em>your shelves</em>?",
    "ft-desc": "Leave your email and a representative will contact you in less than 24 hours with a custom quote.",
    "form-email": "Email address",
    "form-email-ph": "your@store.com",
    "form-business": "Business Name",
    "form-business-ph": "Your business name",
    "form-btn": "Request Quote →",
    "ft-direct": "Or write us directly at",
    "ft-copyright": "© 2025 LatAm Foods LLC. All rights reserved."
  }
};

let currentLang = 'es';

document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.getElementById('langBtn');

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'es' ? 'en' : 'es';
      langBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';
      updateContent();
    });
  }
});

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      element.innerHTML = translations[currentLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[currentLang] && translations[currentLang][key]) {
      element.placeholder = translations[currentLang][key];
    }
  });

  document.documentElement.lang = currentLang;
}
