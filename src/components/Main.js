function Main() {
  return (
    <main className="main">
      <h1>This week specials</h1>
      <button className="btn-cta-2">Online Menu</button>

      <div className="card-container">
        <div className="food-card">
          <img src="/assets/greek-salad.jpg" alt="" />

          <div className="text-container">
            <p className="labels">
              <span>Greek salad</span>
              <span>$12.99</span>
            </p>

            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              tempore necessitatibus impedit rem at consectetur.
            </p>

            <button className="btn-card">Order Now</button>
          </div>
        </div>
        <div className="food-card">
          <img src="/assets/lemon-dessert.jpg" alt="" />

          <div className="text-container">
            <p className="labels">
              <span>Greek salad</span>
              <span>$12.99</span>
            </p>

            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              tempore necessitatibus impedit rem at consectetur.
            </p>

            <button className="btn-card">Order Now</button>
          </div>
        </div>
        <div className="food-card">
          <img src="/assets/bruchetta.svg" alt="" />

          <div className="text-container">
            <p className="labels">
              <span>Greek salad</span>
              <span>$12.99</span>
            </p>

            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              tempore necessitatibus impedit rem at consectetur.
            </p>

            <button className="btn-card">Order Now</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
