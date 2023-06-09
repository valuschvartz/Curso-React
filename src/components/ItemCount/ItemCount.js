import './ItemCount.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)
    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }
    const decrement = () => {
        if(quantity > initial){
            setQuantity(quantity-1)
        }
    }
    return(
        <div className='Counter'>
            <div className='Controla'>
                <button className='Button' onClick={decrement}> - </button>
                <h4 className='Number'>{quantity}</h4>
                <button className='Button' onClick={increment}> + </button>
            </div>
        <div>
        <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>
          <FontAwesomeIcon icon={faShoppingCart} />
          Agregar al Carrito
        </button>
         </div>
        </div>
    )
}

export default ItemCount