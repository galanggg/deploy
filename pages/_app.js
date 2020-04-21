import Head from "next/head";
import "bulma/css/bulma.css";
import { Container } from "rbx";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Slashroot 5</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/static/fontawesome/css/all.css" />
      </Head>
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
};

export default App;
