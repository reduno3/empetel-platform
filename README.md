const catalogGrid = document.getElementById('catalogGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

let catalogItems = [];

const formatCategoryLabel = (value) => {
  const labels = {
    reparacion: 'Reparación',
    repuestos: 'Repuestos',
    nuevos: 'Nuevos',
    acondicionados: 'Acondicionados',
    'club-mayorista': 'Club Mayorista'
  };

  return labels[value] || value;
};

const renderCatalog = () => {
  const term = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filtered = catalogItems.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = !term || `${item.title} ${item.brand} ${item.description}`.toLowerCase().includes(term);
    return matchesCategory && matchesSearch;
  });

  catalogGrid.innerHTML = filtered.map((item) => `
    <article class="product-card">
      <img src="${item.image}" alt="${item.title}" />
      <div class="product-body">
        <div class="product-meta">
          <span class="product-tag">${item.badge}</span>
          <span class="product-price">${item.price}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="card-actions">
          <span>${item.brand}</span>
          <a class="btn btn-primary" href="https://wa.me/34600000000?text=${encodeURIComponent(`Hola EMPETEL, quiero consultar ${item.title}`)}" target="_blank" rel="noreferrer">Solicitar</a>
        </div>
      </div>
    </article>
  `).join('');

  if (!filtered.length) {
    catalogGrid.innerHTML = `
      <div class="info-card" style="grid-column: 1 / -1;">
        <h3>No se encontraron resultados</h3>
        <p>Prueba otra búsqueda o cambia la categoría para ver más productos.</p>
      </div>
    `;
  }
};

async function loadCatalog() {
  try {
    const response = await fetch('/api/catalog');
    const data = await response.json();
    catalogItems = data.items || [];
    renderCatalog();
  } catch (error) {
    console.error('No se pudo cargar el catálogo:', error);
    catalogGrid.innerHTML = `
      <div class="info-card" style="grid-column: 1 / -1;">
        <h3>Error al cargar el catálogo</h3>
        <p>Revisa la conexión o la API del proyecto.</p>
      </div>
    `;
  }
}

searchInput.addEventListener('input', renderCatalog);
categoryFilter.addEventListener('change', renderCatalog);

loadCatalog();
