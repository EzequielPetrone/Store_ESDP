  
const getProductos = () => {

  const productos = [
    { id: 1, descripcion: 'Soy el producto 1', stock: 5 },
    { id: 2, descripcion: 'Soy el producto 2', stock: 15 },
    { id: 3, descripcion: 'Soy el producto 3', stock: 10 }
  ]

  return new Promise((resolve) => {
      setTimeout(() => {
      resolve(productos)
    }, 2500);
  })
}

export default getProductos;