import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
