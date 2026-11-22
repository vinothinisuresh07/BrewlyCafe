function MenuItem({item, onAdd}){
    return(
        <>
           <article className="menu-item">
            <img src={item.image} alt={item.alt} loading="lazy"/>
            <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-bottom">
                    <span className="price">₹{item.price}</span>
                    <button className="add-btn"onClick={()=>onAdd(item)}>Add to Cart</button>
                    </div> </div>
           </article>
           
        </>
    )
}
export default MenuItem;