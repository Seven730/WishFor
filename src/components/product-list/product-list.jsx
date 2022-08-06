import { useContext } from "react";

import Product from "../product/product";

import AddButton from "../atoms/add-button/add-button";
import ReturnButton from "../atoms/return-button/return-button";
import AddProduct from "../add-product/add-product";

import WishlistContext from "../../store/wishlist-context";

function ProductList({ data }) {
  const ctx = useContext(WishlistContext);

  return (
    <>
      <h2>{ctx.selectedWishlist.title}</h2>
      {data.length ? (
        data.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            date={new Date(item.date)}
            title={item.title}
            price={item.price}
            bought={item.bought}
          />
        ))
      ) : (
        <h3 className="list-items__fallback">Brak dodanych produktów</h3>
      )}
      <AddButton modalContent={<AddProduct />} title="Dodaj produkt" />
      <ReturnButton />
    </>
  );
}

export default ProductList;
