import { useState } from 'react'
import './Header.css'
import './Menu.css'


const Header = () => {
    const [display, setDisplay] = useState(false)

    return (
        <header className="header">
            <h1 className='tesla_name'>Tesla</h1>
            <ul className='cars_models'>
                <li><a href="#model3">Model 3</a></li>
                <li><a href="#modelx">Model X</a></li>
                <li><a href="#model-s">Model S</a></li>
                <li><a href="#modely">Model Y</a></li>
            </ul>
            <div className='menu'>
                <h3 onClick={() => setDisplay(!display)}>Menu</h3>
            </div>


            <ul className={"Menu-Container"} style={{display: display ? 'flex' : 'none'}}>
                <li><span onClick={() => setDisplay(!display)}> X</span></li>
                <li>Existing Inventory</li>
                <li>Shop</li>
                <li>Used Inventory</li>
                <li>Trade in</li>
                <li>Test Drive</li>
                <li>Find Us</li>
                <li>Suporter</li>
                <li>Charging</li>  
                <li>Utilities</li>  	                                                                                                                                                                
            </ul>
        </header>
    )
}

export default Header;
