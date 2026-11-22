import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import CartPanel from './components/CartPanel.jsx'
import Specials from './components/Specials.jsx'
import Reviews from './components/Reviews.jsx'
import Footer from './components/Footer.jsx'
import Chatbot from './components/Chatbot.jsx'

const menu = [
  { id: 1, name: "Chocolate Pancakes", price: 180, image: "/images/pancakes.jpg", alt: "Stack of pancakes with chocolate drizzle", description: "Fluffy golden pancakes finished with a rich chocolate drizzle." },
  { id: 2, name: "Blueberry Cheesecake", price: 220, image: "/images/cheesecake.jpg", alt: "Blueberry cheesecake topped with white chocolate", description: "Creamy cheesecake on a buttery base, topped with fresh blueberries." },
  { id: 3, name: "Choco Profiteroles", price: 200, image: "/images/profiteroles.jpg", alt: "Choux pastries covered in chocolate sauce", description: "Crisp choux pastries on whipped cream with warm chocolate sauce." },
  { id: 4, name: "Cappuccino", price: 150, image: "/images/cappuccino.jpg", alt: "Cappuccino with leaf latte art", description: "Rich espresso with silky steamed milk and a perfect foam art finish." },
  { id: 5, name: "Baked Eggs & Toast", price: 240, image: "/images/baked-eggs.jpg", alt: "Baked eggs with toast and an iced coffee", description: "Creamy baked eggs with cherry tomatoes, basil and rustic brown bread." },
  { id: 6, name: "Almond Croissant", price: 130, image: "/images/croissant.avif", alt: "Almond croissant with chocolate drizzle", description: "Flaky butter croissant topped with toasted almonds and chocolate drizzle." },
  { id: 7, name: "Pineapple Veg Burger", price: 210, image: "/images/burger.avif", alt: "Veg burger with a pineapple slice and lettuce", description: "Crispy veg patty with grilled pineapple, onion and fresh lettuce in a sesame bun." },
  { id: 8, name: "Granola Fruit Bowl", price: 190, image: "/images/fruit-bowl.avif", alt: "Yogurt bowl with granola, kiwi, dragon fruit and blueberries", description: "Creamy yogurt with crunchy granola, kiwi, dragon fruit and blueberries." },
];

function App() {
  const [cart,setCart]=useState([]);
  const [open, setOpen]=useState(false);
  function handleAdd(item){
    setCart([...cart,item]);
  }
  

  return (
   <>
   <Header cartCount={cart.length} onCartClick={()=>setOpen(!open)}/>
    {open && <CartPanel cart={cart} />}
   <Hero />
   <About />
   <Menu  menu={menu} onAdd={handleAdd}/>
   <Specials onAdd={handleAdd} />
   <Reviews />
   <Footer />
   <Chatbot />
   </>
  )
}

export default App
