const store = {
  products: [
    { id: 1, name: "Camisa", category: "Roupas", price: 49.9, stock: 15 },
    { id: 2, name: "Calça", category: "Roupas", price: 89.9, stock: 10 },
    { id: 3, name: "Tênis", category: "Calçados", price: 199.9, stock: 5 },
    { id: 4, name: "Boné", category: "Acessórios", price: 29.9, stock: 20 },
    { id: 5, name: "Relógio", category: "Acessórios", price: 299.9, stock: 3 },
    { id: 5, name: "Teste", category: "Acessórios", price: 299.9, stock: 3 },
  ],
  customers: [
    { id: 1, name: "João Silva", age: 25 },
    { id: 2, name: "Maria Santos", age: 32 },
    { id: 3, name: "Pedro Oliveira", age: 19 },
  ],
  orders: [
    { id: 1, customerId: 1, productIds: [1, 3], total: 249.8 },
    { id: 2, customerId: 2, productIds: [2], total: 89.9 },
  ],
};
