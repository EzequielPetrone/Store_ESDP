import Branding from './Branding';
import ItemListContainer from './ItemListContainer';

const Main = () => {
    return (
        <>
        <section className="my-4">
          <Branding/>
        </section>
        <section className="my-4">
          <ItemListContainer/>
        </section>    
        </>
    )
}

export default Main