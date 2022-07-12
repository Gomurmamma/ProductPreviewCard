import Head from "next/head";
import style from "../styles/homepage.module.scss";
import ProductPreviewCard from "../components/ProductPreviewCard";

function HomePage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <section className={style.homepage}>
        <main>
          <ProductPreviewCard />
        </main>
      </section>
    </>
  );
}

export default HomePage;
