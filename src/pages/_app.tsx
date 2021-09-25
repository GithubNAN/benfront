import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import theme from "../theme";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider options={{}}>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}
export default MyApp;
