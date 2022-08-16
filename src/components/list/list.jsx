import WishlistList from "../wishlist-list/wishlist-list";
import ProductList from "../product-list/product-list";

import Card from "../atoms/card/card";

import { listTypes } from "../../helpers/helpers";

import "./list.css";

const pfx = "list";

function List({ data, type }) {
  return (
    <Card className={pfx}>
      <h1 className="app-header">WishFor</h1>
      <ul className={`${pfx}-items`}>
        {type === listTypes.wishlist ? (
          <WishlistList data={data} />
        ) : (
          <ProductList data={data} />
        )}
      </ul>
    </Card>
  );
}

export default List;
