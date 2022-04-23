import './style.scss'

function MainComponent(props){
    return(
        <div className="background" id={props.id}>
            <h1 className='models'>{props.text}</h1>
            
            <h3 className='spanmodels'>Order Online for Touchless Delivery</h3>
            <button className='order'>
                CUSTOM ORDER
            </button>
            <button className='order'>EXISTING INVENTORY</button>

        </div>
    )
}

export default MainComponent