function Header() {
  return (
    <header className="header">
      <div className="header-text">
        <h1>Little Lemon</h1>
        <h3>Chicaho</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
          similique et sequi. Nobis illo perspiciatis harum! Dolore quaerat est
          fuga.
        </p>
        <button className="btn-cta">Reserve a table</button>
      </div>
      <div>
        <img
          src="/assets/restauranfood.jpg"
          alt="food-image"
          width={300}
          height={300}
        />
      </div>
    </header>
  );
}

export default Header;
