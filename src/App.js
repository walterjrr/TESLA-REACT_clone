import './App.css';
import Header from './Component/Header'




function App() {
  return (
    <>
      <nav className='scroll'>
        <Header />
        <div className="background model3">
          <h1 className='models'>Model 3</h1>
          <h3 className='spanmodels'>Order Online for Touchless Delivery</h3>
          <button className='order'>CUSTOM ORDER</button>
          <button className='inventory'>EXISTING INVENTORY</button>
        </div>
        <div className="background modelx">
          <h1 className='models'>Model X</h1>
          <h3 className='spanmodels'>Order Online for Touchless Delivery</h3>
          <button className='order'>CUSTOM ORDER</button>
          <button className='inventory'>EXISTING INVENTORY</button>
        </div>
        <div className="background modely">
          <h1 className='models'>Model Y</h1>
          <h3 className='spanmodels'>Order Online for Touchless Delivery</h3>
          <button className='order'>CUSTOM ORDER</button>
          <button className='inventory'>EXISTING INVENTORY</button>
        </div>
        <div className="background model-s">
          <h1 className='models'>Model S</h1>
          <h3 className='spanmodels'>Order Online for Touchless Delivery</h3>
          <button className='order'>CUSTOM ORDER</button>
          <button className='inventory'>EXISTING INVENTORY</button>
        </div>
      </nav>
    </>
  )
}

export default App;
