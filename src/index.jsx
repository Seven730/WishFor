import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { WishlistContextProvider } from "./store/wishlist-context";

import "./index.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <WishlistContextProvider>
      <App />
    </WishlistContextProvider>
  </StrictMode>
);
