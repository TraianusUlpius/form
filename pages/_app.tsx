import { ThemeProvider } from "theme-ui";
import { base } from "@theme-ui/presets";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={base}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
