// import { getFirestore, collection, addDoc } from "firebase/firestore";

// // import img1 from '../images/productos/CD_fragil.jpg'
// // import img2 from '../images/productos/CD_pelea.jpg'
// // import img3 from '../images/productos/CD_acariciando.jpg'
// // import img4 from '../images/productos/remera_1.jpg'
// // import img5 from '../images/productos/remera_2.jpg'
// // import img6 from '../images/productos/remera_3.jpg'

// let img1 = 'https://firebasestorage.googleapis.com/v0/b/store-esdp.appspot.com/o/images%2Fproductos%2Fcd_quemado.jpg?alt=media&token=81dcfe75-10e6-4f7e-9d5b-c9c40ea16280'
// let img2 = 'https://firebasestorage.googleapis.com/v0/b/store-esdp.appspot.com/o/images%2Fproductos%2Fremera-logo-clasico.jpg?alt=media&token=c1730fff-d822-4155-bb06-fd70e97a64a2'
// let img3 = 'https://firebasestorage.googleapis.com/v0/b/store-esdp.appspot.com/o/images%2Fproductos%2Fvirna_lisi.webp?alt=media&token=1f40e521-080b-402e-b475-4e3a050d0387'
// let img4 = 'https://firebasestorage.googleapis.com/v0/b/store-esdp.appspot.com/o/images%2Fproductos%2Fcircus.webp?alt=media&token=0c19cf35-4e81-4248-8016-61f635b08f3c'
// let img5 = 'https://firebasestorage.googleapis.com/v0/b/store-esdp.appspot.com/o/images%2Fproductos%2Fteatrito.webp?alt=media&token=91d4b444-33b0-4839-a78d-2e6a3b7c60e0'

// const productos = [
//     { descripcion: 'CD Quemado', precio: 1200, imgUrl: img1, stock: 15, categoria: 'discos' },
//     { descripcion: 'Remera Primer Logo', precio: 2200, imgUrl: img2, stock: 15, categoria: 'indumentaria' },
//     { descripcion: 'Póster Virna Lisi', precio: 500, imgUrl: img3, stock: 30, categoria: 'graficas' },
//     { descripcion: 'Póster Circus', precio: 500, imgUrl: img4, stock: 40, categoria: 'graficas' },
//     { descripcion: 'Póster Teatrito', precio: 500, imgUrl: img5, stock: 50, categoria: 'graficas' }
//     //   { descripcion: 'Remera Calavera', precio: 2200, imgUrl: img6, stock: 10, categoria: 'indumentaria' }
// ]

// const testUpload = async () => {
//   const db = getFirestore();
//   for (const p of productos) {
//     try {
//       const docRef = await addDoc(collection(db, "productos"), p)
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   }
// }

// export { testUpload }