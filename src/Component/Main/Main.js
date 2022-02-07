import './Main.css'
import { Link } from "react-router-dom"

const Main = () => {
    return (
        <>
            <div className="background" id="model3">
                <h1 className='models' >Model 3</h1>
                <h3 className='spanmodels'>Order Online for Touchless Delivery</h3>
                <button className='order'>
                    <Link to="/buy">CUSTOM ORDER</Link>
                </button>
                <button className='order'>EXISTING INVENTORY</button>
            </div>

            <div className="background" id='modelx'>
                <h1 className='models'>Model X</h1>
                <h3 className='spanmodels'>Order Online for Touchless Delivery</h3>
                <button className='order'>
                    <Link to="/buy">CUSTOM ORDER</Link>
                </button>
                <button className='order'>EXISTING INVENTORY</button>
            </div>

            <div className="background" id='modely'>
                <h1 className='models'>Model Y</h1>
                <h3 className='spanmodels'>Order Online for Touchless Delivery</h3>
                <button className='order'>
                    <Link to="/buy">CUSTOM ORDER</Link>
                </button>
                <button className='order'>EXISTING INVENTORY</button>
            </div>

            <div className="background" id='model-s'>
                <h1 className='models'>Model S</h1>
                <h3 className='spanmodels'>Order Online for Touchless Delivery</h3>
                <button className='order'>
                    <Link to="/buy">CUSTOM ORDER</Link>
                </button>
                <button className='order'>EXISTING INVENTORY</button>
            </div>
        </>
    )
}
export default Main