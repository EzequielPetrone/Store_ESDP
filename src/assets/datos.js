import img1 from '../images/productos/CD_fragil.jpg'
import img2 from '../images/productos/CD_pelea.jpg'
import img3 from '../images/productos/CD_acariciando.jpg'
import img4 from '../images/productos/remera_1.jpg'
import img5 from '../images/productos/remera_2.jpg'
import img6 from '../images/productos/remera_3.jpg'

const productos = [
  { id: '1', descripcion: 'CD Fragilinvencible', precio: 1200, imgUrl: img1, stock: 5, categoria: 'CD' },
  { id: '2', descripcion: 'CD Pelea al Horror', precio: 1200, imgUrl: img2, stock: 15, categoria: 'CD' },
  { id: '3', descripcion: 'CD Acariciando Fuego', precio: 1200, imgUrl: img3, stock: 10, categoria: 'CD' },
  { id: '4', descripcion: 'Remera modelo 1', precio: 2200, imgUrl: img4, stock: 5, categoria: 'Remera' },
  { id: '5', descripcion: 'Remera modelo 2', precio: 2200, imgUrl: img5, stock: 15, categoria: 'Remera' },
  { id: '6', descripcion: 'Remera modelo 3', precio: 2200, imgUrl: img6, stock: 10, categoria: 'Remera' }
]

const getProductos = (cat = null) => {
  console.log(cat);
  console.log(cat? 'chau' : 'holi');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cat ? productos.filter(p => p.categoria === cat) : productos)
    }, 2000);
  })
}

const getProdbyId = (idprod) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos ? productos.find(p => p.id === idprod) : null)
    }, 2000);
  })
}

const KEYSTORAGE = 'PRODUCTOSADDED'

const getQtyById = (id) => {
  let arrayProd = JSON.parse(localStorage.getItem(KEYSTORAGE)) ?? []
  let elemento = arrayProd.find(e => e.id === id)
  return elemento ? elemento.qty : 0
}

const setQtyById = (id, cant) => {
  let arrayProd = JSON.parse(localStorage.getItem(KEYSTORAGE)) ?? []
  let i = arrayProd.findIndex(e => e.id === id)
  if (i >= 0) {
    arrayProd[i].qty = cant;
  } else {
    arrayProd.push({ id: id, qty: cant })
  }
  localStorage.setItem(KEYSTORAGE, JSON.stringify(arrayProd))
}

const getQtyTotal = () => {
  let suma = 0
  let arrayProd = JSON.parse(localStorage.getItem(KEYSTORAGE)) ?? []
  for (const p of arrayProd) {
    suma += p.qty
  }
  return suma
}

const deleteItembyId = (id) => {
  let newArray = []
  let arrayProd = JSON.parse(localStorage.getItem(KEYSTORAGE)) ?? []
  newArray = arrayProd.filter(e => e.id !== id)
  localStorage.setItem(KEYSTORAGE, JSON.stringify(newArray))
}

const getCartArray = () => {
  let cartArray = []
  let arrayProd = JSON.parse(localStorage.getItem(KEYSTORAGE)) ?? []
  for (const p of arrayProd) {
    let e = productos ? productos.find(x => x.id === p.id) : null
    if (e) {
      cartArray.push({ id: p.id, descripcion: e.descripcion, precio: e.precio, imgUrl: e.imgUrl, qty: p.qty })
    } else {
      deleteItembyId(p.id)
    }
  }
  return cartArray
}

export { getProductos, getProdbyId, getQtyById, setQtyById, getQtyTotal, getCartArray, deleteItembyId }