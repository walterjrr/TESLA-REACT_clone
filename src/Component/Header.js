import './Header.css'

const Header = () => {
    return (
        
            <header className="header">
                
                <h1 className='tesla_name'>Tesla</h1>
                <ul className='cars_models'>
                    <li>Model 3</li>
                    <li>Model X</li>
                    <li>Model S</li>
                    <li>Model Y</li>
                </ul>
                <div className='menu'>
                    <h3>Menu</h3>
                </div>
            </header>
        
    )
}

export default Header;
