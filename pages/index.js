import style from "../public/sass/productcard.module.scss";
import ProductPreviewCard from "../components/ProductPreviewCard";

function HomePage() {
  return (
    <div className={style.productcard}>
      <ProductPreviewCard />
    </div>
  );
}

export default HomePage;
