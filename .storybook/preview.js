import { ThemeProvider } from "styled-components";

import GlobalStyles from "../src/components/particles/globalStyles";
import themeDefault from "../src/components/particles/themeDefault";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
