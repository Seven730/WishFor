import React, { useEffect, useState } from "react";

const WishlistContext = React.createContext({
  wishlists: [],
  products: [],
  setInitialData: (data) => {},
  addWishlist: (name) => {},
  removeWishlist: (id) => {},
  addProduct: (name) => {},
  removeProduct: (id) => {},
  changeProductState: (id) => {},
  selectedWishlist: null,
  selectWishlist: (id) => {},
  resetSelect: () => {},
});

export const WishlistContextProvider = ({ children }) => {
  const [selectedWishlist, setSelectedWishlist] = useState(null);
  const [wishlistsData, setWishlistsData] = useState([]);
  const [productsData, setProductsData] = useState();

  useEffect(() => {
    setProductsData(wishlistsData.map((wishlist) => wishlist.products));
  }, [wishlistsData]);

  // Wybór aktywnej list
  const selectWishlistHandler = (id) => {
    setSelectedWishlist(wishlistsData[id]);
  };

  const resetSelectHandler = () => {
    setSelectedWishlist(null);
  };

  // Ustawianie danych z local storage po inicjalizacji
  const setInitialDataHandler = (data) => {
    setWishlistsData(data);
  };

  // Dodawanie i usuwanie list życzeń
  const addWishlistHandler = (name) => {
    if (!wishlistsData) return;

    const wishlistsDataNames = wishlistsData.map((element) => element.title);

    if (!name || wishlistsDataNames.includes(name)) return;

    const newList = {
      id: wishlistsData.length,
      title: name,
      date: new Date(Date.now()),
      products: [],
    };

    const newState = [...wishlistsData, newList];

    setWishlistsData(newState);

    localStorage.setItem("wishlistsData", JSON.stringify(newState));
  };

  const removeWishlistHandler = (id) => {
    const newState = wishlistsData.filter((wishlist) => wishlist.id !== id);

    setWishlistsData(newState);

    localStorage.setItem("wishlistsData", JSON.stringify(newState));
  };

  // Dodawanie i usuwanie produktów
  const addProductHandler = (name, price) => {
    if (!selectedWishlist.products || !wishlistsData || !name || price <= 0)
      return;

    const productsDataNames = selectedWishlist.products.map(
      (element) => element.title
    );

    if (productsDataNames.includes(name)) return;

    const formattedPrice = new Intl.NumberFormat("pl-PL", {
      style: "currency",
      currency: "PLN",
    }).format(price);

    const newProduct = {
      id: selectedWishlist.products.length,
      title: name,
      price: formattedPrice,
      date: new Date(Date.now()),
      bought: false,
    };

    const newState = wishlistsData.map((wishlist) => {
      if (wishlist.id === selectedWishlist.id)
        wishlist.products = [...wishlist.products, newProduct];

      return wishlist;
    });

    setWishlistsData(newState);
    localStorage.setItem("wishlistsData", JSON.stringify(newState));
  };

  const removeProductHandler = (id) => {
    const newState = wishlistsData.map((wishlist) => {
      if (wishlist.id === selectedWishlist.id)
        wishlist.products = wishlist.products.filter(
          (product) => product.id !== id
        );

      return wishlist;
    });

    setWishlistsData(newState);
    localStorage.setItem("wishlistsData", JSON.stringify(newState));
  };

  // Oznaczanie produktu jako zakupionego
  const changeProductStateHandler = (id) => {
    const newState = wishlistsData.map((wishlist) => {
      if (wishlist.id === selectedWishlist.id)
        wishlist.products[id].bought = !wishlist.products[id].bought;

      return wishlist;
    });

    setWishlistsData(newState);
    localStorage.setItem("wishlistsData", JSON.stringify(newState));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlists: wishlistsData,
        products: productsData,
        setInitialData: setInitialDataHandler,
        addWishlist: addWishlistHandler,
        removeWishlist: removeWishlistHandler,
        addProduct: addProductHandler,
        removeProduct: removeProductHandler,
        changeProductState: changeProductStateHandler,
        selectedWishlist: selectedWishlist,
        selectWishlist: selectWishlistHandler,
        resetSelect: resetSelectHandler,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
