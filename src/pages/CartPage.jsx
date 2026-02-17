import ShoppingCart from '../components/ShoppingCart';
import Button from '../components/Button';

function CartPage({ cart, removeFromCart }) {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Your Checkout</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty. Go buy something!</p>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
                    <Button 
                        variant="success" 
                        style={{ marginTop: '20px', width: '300px' }}
                        onClick={() => alert("Proceeding to payment...")}
                    >
                        Confirm Order
                    </Button>
                </div>
            )}
        </div>
    );
}

export default CartPage;