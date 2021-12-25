import img1 from '../images/productos/CD_fragil.jpg'
import img2 from '../images/productos/CD_pelea.jpg'
import img3 from '../images/productos/CD_acariciando.jpg'
import img4 from '../images/productos/remera_1.jpg'
import img5 from '../images/productos/remera_2.jpg'
import img6 from '../images/productos/remera_3.jpg'

const productos = [
  { id: '1', descripcion: 'CD Fragilinvencible', precio: 1200, imgUrl: img1, stock: 5 },
  { id: '2', descripcion: 'CD Pelea al Horror', precio: 1200, imgUrl: img2, stock: 15 },
  { id: '3', descripcion: 'CD Acariciando Fuego', precio: 1200, imgUrl: img3, stock: 10 },
  { id: '4', descripcion: 'Remera modelo 1', precio: 2200, imgUrl: img4, stock: 5 },
  { id: '5', descripcion: 'Remera modelo 2', precio: 2200, imgUrl: img5, stock: 15 },
  { id: '6', descripcion: 'Remera modelo 3', precio: 2200, imgUrl: img6, stock: 10 }
]
const getProductos = () => {

  return new Promise((resolve) => {
      setTimeout(() => {
      resolve(productos)
    }, 2500);
  })
}

const getProdbyId = (idprod) => {
  return productos.find(p => p.id===idprod)
}

const KEYSTORAGE = 'PRODUCTOSADDED'

const getQtyById = (id) => {
  let arrayProd = JSON.parse(localStorage.getItem(KEYSTORAGE)) 
  if (arrayProd) {
    let elemento = arrayProd.find(e => e.id===id)
    return elemento ? elemento.qty : 0
  } else {
    return 0
  }
}

const setQtyById = (id, cant) => {
  let arrayProd = JSON.parse(localStorage.getItem(KEYSTORAGE)) 
  if (arrayProd) {
    let i = arrayProd.findIndex(e => e.id===id)
    if(i>=0){
      arrayProd[i].qty = cant;
    } else {
      arrayProd.push({id: id, qty: cant})
    }
  } else {
    arrayProd=[]
    arrayProd.push({id: id, qty: cant})
  }
  console.log(arrayProd);
  localStorage.setItem(KEYSTORAGE, JSON.stringify(arrayProd))
}

const getQtyTotal = () => {
  let arrayProd = JSON.parse(localStorage.getItem(KEYSTORAGE)) 
  if (arrayProd) {
    let suma = 0
    for (const p of arrayProd) {
      suma += p.qty
    }
    return suma
  } else {
    return 0
  }
}

const getCartArray = () => {
  let cartArray = []
  let arrayProd = JSON.parse(localStorage.getItem(KEYSTORAGE))
  if (arrayProd) {
    for (const p of arrayProd) {
      let e = productos.find(x => x.id === p.id)
      cartArray.push({id: p.id, descripcion: e.descripcion, precio: e.precio, imgUrl: e.imgUrl, qty: p.qty})
    }
  } 
  return cartArray
}

const deleteItembyId = (id) => {
  let newArray=[]
  let arrayProd = JSON.parse(localStorage.getItem(KEYSTORAGE)) 
  if (arrayProd) {
    newArray = arrayProd.filter(e => e.id!==id)
  } 
  localStorage.setItem(KEYSTORAGE, JSON.stringify(newArray))
  
}

export {getProductos, getProdbyId, getQtyById, setQtyById, getQtyTotal, getCartArray, deleteItembyId }