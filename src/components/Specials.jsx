function Specials({onAdd}){
 return(
    <section id="specials">
        <h2>Our Specials</h2>
        <div className="specials-gird">
            <article className="special-card">
                <h3>Coffee & Cake Combo</h3>
                <div className="combo-images">
  <img src="/images/cappuccino.jpg" alt="Cappuccino" />
  <span className="plus">+</span>
  <img src="/images/cheesecake.jpg" alt="Blueberry cheesecake" />
</div>
          <p>Cappuccino with a slice of Blueberry Cheesecake.</p>
             <p className="special-price">₹330</p>
             <button className="add-btn"
             onClick={()=>onAdd({name:"Coffee & Cake Combo",price:330})}>Add to Cart</button>
            </article>
            <article className="special-card">
                 <h3>Breakfast Combo</h3>
                <div className="combo-images">
                    <img src="/images/baked-eggs.jpg" alt="Baked eggs and toast" />
                     <span className="plus">+</span>
                     <img src="/images/croissant.avif" alt="Almond croissant" />
</div>
          <p>Baked Eggs & Toast with a fresh Almond Croissant.</p>            
             <p className="special-price">₹330</p>
             <button className="add-btn"
             onClick={()=>onAdd({name:"Breakfast Combo",price:330})}>Add to Cart</button>
            </article>
            <article className="special-card">

                          <h3>Sweet Treat Combo</h3>
                          <div className="combo-images">
  <img src="/images/pancakes.jpg" alt="Chocolate pancakes" />
  <span className="plus">+</span>
  <img src="/images/profiteroles.jpg" alt="Choco profiteroles" />
</div>
          <p>Chocolate Pancakes with Choco Profiteroles.</p>
             <p className="special-price">₹340</p>
             <button className="add-btn"
             onClick={()=>onAdd({name:"Sweet Treat Combo",price:340})}>Add to Cart</button>
            </article>
        </div>
    </section>
 )   
}
export default Specials;