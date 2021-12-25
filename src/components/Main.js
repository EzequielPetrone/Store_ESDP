// import React from 'react'
import Branding from './Branding';
// import Redes from './components/Redes';
import ItemListContainer from './ItemListContainer';

const Main = ({updateCounter}) => {
    return (
        <>
        <section className="my-4">
          <Branding/>
        </section>
        <section className="my-4">
          <ItemListContainer updateCounter={updateCounter}/>
        </section>    
        </>
    )
}

export default Main
