import style from "../public/sass/productcard.module.scss";

function HomePage() {
  return (
    <div className={style.productcard}>
      <p>Perfume</p>
      <h1>Gabrielle Essence Eau De Parfum</h1>
      <p>
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <span>$149.99</span> <span>$169.99</span>
      <button>Add to Cart</button>
    </div>
  );
}

export default HomePage;
