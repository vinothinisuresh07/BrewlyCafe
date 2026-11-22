function Header({ cartCount,onCartClick}) {
  return (
    <header className="header scrolled">
      <div>
        <img src="/images/logo.jpg" width="50" height="50" id="logo" alt="Brewly Cafe logo" />
        <h1 id="name">Brewly cafe</h1>
      </div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#specials">Specials</a>
        <a href="#reviews">Reviews</a>
      </nav>
      <div className="cart-info" onClick={onCartClick}>
        🛒 <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
}

export default Header;