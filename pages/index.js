import Head from "next/head";
import style from "../styles/homepage.module.scss";
import ProductPreviewCard from "../components/ProductPreviewCard";

function HomePage() {
  return (
    <>
      <Head></Head>
      <section className={style.homepage}>
        <main>
          <ProductPreviewCard />
        </main>
      </section>
    </>
  );
}

export default HomePage;
