import { useContext, useEffect } from "react";

import List from "./components/list/list";

import { listTypes } from "./helpers/helpers";

import WishlistContext from "./store/wishlist-context";

function App() {
  const ctx = useContext(WishlistContext);

  const listProps = ctx.selectedWishlist
    ? {
        data: ctx.selectedWishlist.products,
        type: listTypes.product,
      }
    : {
        data: ctx.wishlists,
        type: listTypes.wishlist,
      };

  useEffect(() => {
    const localStorageData = localStorage.getItem("wishlistsData");

    if (localStorageData && localStorageData !== "undefined") {
      const localStorageDataJSON = JSON.parse(localStorageData);
      ctx.setInitialData(localStorageDataJSON);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <List {...listProps} />;
}

export default App;
