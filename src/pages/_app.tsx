import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider, createClient } from "urql";

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
  },
});

import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider options={{}}>
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
