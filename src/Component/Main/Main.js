import './Main.css'
import { Link } from "react-router-dom"

const Main = () => {
    return (
        <>
            <div className="background model3" id="model3">
                <h1 className='models' >Model 3</h1>
                <h3 className='spanmodels'>Order Online for Touchless Delivery</h3>
                <button className='order'>
                    <Link to="/buy">CUSTOM ORDER</Link>
                </button>
                <button className='inventory'>EXISTING INVENTORY</button>
            </div>

            <div className="background modelx" id='modelx'>
                <h1 className='models'>Model X</h1>
                <h3 className='spanmodels'>Order Online for Touchless Delivery</h3>
                <button className='order'>
                    <Link to="/buy">CUSTOM ORDER</Link>
                </button>
                <button className='inventory'>EXISTING INVENTORY</button>
            </div>

            <div className="background modely" id='modely'>
                <h1 className='models'>Model Y</h1>
                <h3 className='spanmodels'>Order Online for Touchless Delivery</h3>
                <button className='order'>
                    <Link to="/buy">CUSTOM ORDER</Link>
                </button>
                <button className='inventory'>EXISTING INVENTORY</button>
            </div>

            <div className="background model-s" id='model-s'>
                <h1 className='models'>Model S</h1>
                <h3 className='spanmodels'>Order Online for Touchless Delivery</h3>
                <button className='order'>
                    <Link to="/buy">CUSTOM ORDER</Link>
                </button>
                <button className='inventory'>EXISTING INVENTORY</button>
            </div>
        </>
    )
}
export default Main