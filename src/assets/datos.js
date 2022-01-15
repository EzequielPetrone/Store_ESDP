// import { getFirestore, collection, addDoc } from "firebase/firestore";

// import img1 from '../images/productos/CD_fragil.jpg'
// import img2 from '../images/productos/CD_pelea.jpg'
// import img3 from '../images/productos/CD_acariciando.jpg'
// import img4 from '../images/productos/remera_1.jpg'
// import img5 from '../images/productos/remera_2.jpg'
// import img6 from '../images/productos/remera_3.jpg'

// const productos2 = [
//   { descripcion: 'CD Fragilinvencible', precio: 1200, imgUrl: img1, stock: 5, categoria: 'discos' },
//   { descripcion: 'CD Pelea al Horror', precio: 1200, imgUrl: img2, stock: 0, categoria: 'discos' },
//   { descripcion: 'CD Acariciando Fuego', precio: 1200, imgUrl: img3, stock: 10, categoria: 'discos' },
//   { descripcion: 'Remera Volviendo', precio: 2200, imgUrl: img4, stock: 5, categoria: 'indumentaria' },
//   { descripcion: 'Remera Acariciando', precio: 2200, imgUrl: img5, stock: 0, categoria: 'indumentaria' },
//   { descripcion: 'Remera Calavera', precio: 2200, imgUrl: img6, stock: 10, categoria: 'indumentaria' }
// ]

// const testUpload = async () => {
//   const db = getFirestore();
//   for (const p of productos2) {
//     try {
//       const docRef = await addDoc(collection(db, "productos"), p)
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   }
// }

// export { testUpload }