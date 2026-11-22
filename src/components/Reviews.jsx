function Reviews(){
return(
    <section id="reviews">
        <h2>Reviews</h2>
        <div className="reviews-grid">
        <article className="review-card">
           <p className="stars">★★★★★</p>
           <p className="review-text">The cappuccino is perfect and the cheesecake is dreamy. My new favourite spot to study.</p>
           <p className="reviewer">Swathi Ravichandran</p>
        </article>
        <article className="review-card">
          <p className="stars">★★★★★</p>
          <p className="review-text">Loved the Breakfast Combo. Cozy place, friendly staff, and great value.</p>
          <p className="reviewer">Keerthana</p>
        </article>

        <article className="review-card">
          <p className="stars">★★★★☆</p>
          <p className="review-text">The pineapple burger was a lovely surprise. Will definitely come back for the pancakes.</p>
          <p className="reviewer">Rosana M.</p>
        </article>
        </div>
    </section>
)
}
export default Reviews;