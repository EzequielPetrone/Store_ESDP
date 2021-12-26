import Branding from './Branding';
import ItemList from './ItemList';

const Main = () => {
  return (
    <>
      <section className="my-4">
        <Branding />
      </section>
      <section className="my-4">
        <ItemList />
      </section>
    </>
  )
}

export default Main