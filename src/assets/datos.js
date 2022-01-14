// import { getFirestore } from "firebase/firestore";
// import { collection, getDocs } from "firebase/firestore";

import img1 from '../images/productos/CD_fragil.jpg'
import img2 from '../images/productos/CD_pelea.jpg'
import img3 from '../images/productos/CD_acariciando.jpg'
import img4 from '../images/productos/remera_1.jpg'
import img5 from '../images/productos/remera_2.jpg'
import img6 from '../images/productos/remera_3.jpg'

const productos = [
  { id: '1', descripcion: 'CD Fragilinvencible', precio: 1200, imgUrl: img1, stock: 5, categoria: 'discos' },
  { id: '2', descripcion: 'CD Pelea al Horror', precio: 1200, imgUrl: img2, stock: 15, categoria: 'discos' },
  { id: '3', descripcion: 'CD Acariciando Fuego', precio: 1200, imgUrl: img3, stock: 10, categoria: 'discos' },
  { id: '4', descripcion: 'Remera Volviendo', precio: 2200, imgUrl: img4, stock: 5, categoria: 'indumentaria' },
  { id: '5', descripcion: 'Remera Acariciando', precio: 2200, imgUrl: img5, stock: 15, categoria: 'indumentaria' },
  { id: '6', descripcion: 'Remera Calavera', precio: 2200, imgUrl: img6, stock: 10, categoria: 'indumentaria' }
]

const getProductos = (cat) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cat !== null && cat.toLowerCase() !== 'all' ? productos.filter(p => p.categoria.toLowerCase() === cat.toLowerCase()) : productos)
    }, 1000);
  })
}

const getProdbyId = (idprod) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos ? productos.find(p => p.id === idprod) : null)
    }, 1000);
  })
}

// READING FB
// const db = getFirestore();
// const muestroProductosFB = async () => {
//   const querySnapshot = await getDocs(collection(db, "productos"));
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id);
//     console.log(doc.data());
//   });
// }

export { getProductos, getProdbyId }