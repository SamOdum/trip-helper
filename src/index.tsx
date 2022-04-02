import * as ReactDOMClient from "react-dom/client";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

export const muiCache = createCache({
  key: "mui",
  prepend: true,
});

const container = document.getElementById("root") as Element;

// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(
  <CacheProvider value={muiCache}>
    <App />
  </CacheProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
