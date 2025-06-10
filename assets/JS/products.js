function renderProducts() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    store.products.forEach(p => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
      <p>Identificador: ${p.id}</p>
      <h3>${p.name}</h3>
      <p>Categoria: ${p.category}</p>
      <p>Preço: R$ ${p.price.toFixed(2)}</p>
      <p>Estoque: ${p.stock}</p>
      `;
      content.appendChild(card);
    });
}
  
  renderProducts();
  