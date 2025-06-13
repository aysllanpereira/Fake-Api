function renderProducts() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    store.products.forEach(p => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
      <p>Produto: <strong>${p.name}</strong></p>
      <p>Categoria: <strong>${p.category}</strong></p>
      <p>Valor: <strong>R$${p.price.toFixed(2)}</strong></p>
      <p>Estoque: <strong>${p.stock} produtos</strong></p>
      `;
      content.appendChild(card);
    });
}
  
  renderProducts();
  