

function produtos(id) {
    return store.products.find(prod => prod.id === id);
} 
  
  // console.log(produtos(1))
  
function clientes(id) {
    return store.customers.find(cliente => cliente.id === id);
}
  
  // console.log(clientes(1))
  
function orders() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    
    store.orders.forEach(item => {
      console.log(item);
      const cli = clientes(item.customerId);
      const prods = item.productIds.map(id => produtos(id));
      const div = document.createElement('div');
      div.classList.add('card');
      
      div.innerHTML = `
      <p>Cliente: <strong>${cli.name}</strong></p>
        <ul>
            ${prods.map(element => {
                return `
                    <li>Categoria: <strong>${element.category}</strong></li>
                    <li>Produto: <strong>${element.name}</strong></li>
                    <li>Valor: <strong>R$${element.price.toFixed(2)}</strong></li>
                `
            }).join(`<hr>`)}
        </ul>
      `
      content.appendChild(div);
      
    });
}

orders()