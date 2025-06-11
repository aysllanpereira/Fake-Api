

function orders() {
    const dados = store.orders.map(item => console.log({ id: item.id, customerId: item.customerId, productIds: item.productIds, total: item.total}));;
    return dados;
}

function exibir() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    
}

