import Head from "next/head";
import "../styles/global.scss";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon-T.png"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
