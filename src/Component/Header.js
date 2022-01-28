import './Header.css'

const Header = () => {
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
                    <h3>Menu</h3>
                </div>
            </header>
        
    )
}

export default Header;
