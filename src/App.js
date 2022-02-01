import './App.css';
import Header from './Component/Header'
import Footer from './Component/Footer'

function App() {
  return (
    <>
      <nav className='scroll'>
        <Header />
        <div className="background model3" id="model3">
          <h1 className='models' >Model 3</h1>
          <h3 className='spanmodels'>Order Online for Touchless Delivery</h3>
          <button className='order'>CUSTOM ORDER</button>
          <button className='inventory'>EXISTING INVENTORY</button>
        </div>
        <div className="background modelx" id='modelx'>
          <h1 className='models'>Model X</h1>
          <h3 className='spanmodels'>Order Online for Touchless Delivery</h3>
          <button className='order'>CUSTOM ORDER</button>
          <button className='inventory'>EXISTING INVENTORY</button>
        </div>
        <div className="background modely" id='modely'>
          <h1 className='models'>Model Y</h1>
          <h3 className='spanmodels'>Order Online for Touchless Delivery</h3>
          <button className='order'>CUSTOM ORDER</button>
          <button className='inventory'>EXISTING INVENTORY</button>
        </div>
        <div className="background model-s" id='model-s'>
          <h1 className='models'>Model S</h1>
          <h3 className='spanmodels'>Order Online for Touchless Delivery</h3>
          <button className='order'>CUSTOM ORDER</button>
          <button className='inventory'>EXISTING INVENTORY</button>
        </div>
        <Footer />
      </nav>
    </>
  )
}

export default App;
