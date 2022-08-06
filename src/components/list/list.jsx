import WishlistList from "../wishlist-list/wishlist-list";
import ProductList from "../product-list/product-list";

import Card from "../atoms/card/card";

import "./list.css";

function List({ data, type }) {
  return (
    <Card className="list">
      <h1 className="header">WishFor</h1>
      <ul className="list-items">
        {type === "wishlist" ? (
          <WishlistList data={data} />
        ) : (
          <ProductList data={data} />
        )}
      </ul>
    </Card>
  );
}

export default List;
