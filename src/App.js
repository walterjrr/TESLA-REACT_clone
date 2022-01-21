import './App.css';
import Header from './Component/Header'

function App() {
  return (
    <>
    <section>
        <div className="background">
          <Header />
          <h1 className='model3'>Model 3</h1>
          <h3 className='spanmodels'>Order Online for Touchless Delivery</h3>
          <button className='order'>CUSTOM ORDER</button>
          <button className='inventory'>EXISTING INVENTORY</button>
        </div>
      </section>
    </>
  )
}

export default App;
