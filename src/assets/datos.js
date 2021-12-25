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

export {getProductos , getProdbyId}