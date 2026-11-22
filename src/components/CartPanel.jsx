function CartPanel({cart}){
    let total=0;
    cart.forEach((item)=>{
        total +=item.price;
    });
    return(
        <aside className="cart-panel">
            {cart.length === 0 ? (<p>No items yet</p>)
            :(
                <ul>
                    {cart.map((item,index)=>
                        <li key={index}>
                            <span>{item.name}</span>
                            <span>₹{item.price}</span>
                        </li>
                    )}
                </ul>
            )}
            <p className="cart-total">Total: ₹{total}</p>
            <button className="buy">Buy now</button>
        </aside>
    )
}
export default CartPanel;
