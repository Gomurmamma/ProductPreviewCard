import React from "react";

const ProductPreviewCard = () => {
  return (
    <figure>
      <img
        src="/image-product-desktop.jpg"
        alt="Photo of Gabrielle Essence Eau De Parfum"
      />
      <figcaption>
        <h2>PERFUME</h2>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL. <span>$149.99</span>
          <span>$169.99</span>
        </p>
        <button type="button">
          <img src="/icon-cart.svg" alt="Icon of shopping cart" />
          Add to Cart
        </button>
      </figcaption>
    </figure>
  );
};

export default ProductPreviewCard;
