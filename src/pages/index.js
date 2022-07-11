import style from "../styles/homepage.module.scss";
import ProductPreviewCard from "../components/ProductPreviewCard";

function HomePage() {
  return (
    <section className={style.homepage}>
      <main>
        <ProductPreviewCard />
      </main>
    </section>
  );
}

export default HomePage;
