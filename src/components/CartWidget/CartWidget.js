import cart from './assets/cart.svg'
const CartWidget = () => {
    return (
        <div>
           <button className='button-cart'><img src={cart} alt="cart-widget"/>
           0
           </button>
         
        </div>
    );
};
export default CartWidget;
