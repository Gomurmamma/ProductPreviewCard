import React from "react";
import style from "../styles/productpreviewcard.module.scss";

const ProductPreviewCard = () => {
  return (
    <div className={style.container}>
      <figure className={style.productpreviewcard}>
        <img
          src="/image-product-desktop.jpg"
          alt="Photo of Gabrielle Essence Eau De Parfum for desktop"
          className={style.productpreviewcard__productImageDesktop}
        />
        <img
          src="/image-product-mobile.jpg"
          alt="Photo of Gabrielle Essence Eau De Parfum for mobile"
          className={style.productpreviewcard__productImageMobile}
        />
        <figcaption className={style.productpreviewcard__description}>
          <h3 className={style.productpreviewcard__description__category}>
            PERFUME
          </h3>
          <h2 className={style.productpreviewcard__description__title}>
            Gabrielle Essence Eau De Parfum
          </h2>
          <p className={style.productpreviewcard__description__details}>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.{" "}
          </p>
          <div
            className={style.productpreviewcard__description__priceContainer}
          >
            <span className={style.productpreviewcard__description__priceSale}>
              $149.99
            </span>
            <span
              className={style.productpreviewcard__description__priceInitial}
            >
              $169.99
            </span>
          </div>
          <button
            type="button"
            className={style.productpreviewcard__description__button}
          >
            <img src="/icon-cart.svg" alt="Icon of shopping cart" />
            Add to Cart
          </button>
        </figcaption>
      </figure>
    </div>
  );
};

export default ProductPreviewCard;
