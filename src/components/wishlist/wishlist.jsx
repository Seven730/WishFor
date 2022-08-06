import { useContext } from "react";

import WishlistContext from "../../store/wishlist-context";

import Card from "../atoms/card/card";

function Wishlist({ id, date, title, productsCount }) {
  const ctx = useContext(WishlistContext);

  const onClickHandler = () => {
    ctx.selectWishlist(id);
  };

  const onDeleteHandler = () => {
    ctx.removeWishlist(id);
  };

  return (
    <li>
      <Card className="item">
        <span className="item__delete" onClick={onDeleteHandler} title="Kliknij, aby usunąć tę listę">
          &times;
        </span>
        <div className="item-date">
          <div className="item-date__month">
            {date.toLocaleString("pl-PL", { month: "long" })}
          </div>
          <div className="item-date__year">{date.getFullYear()}</div>
          <div className="item-date__day">
            {date.toLocaleString("pl-PL", { day: "2-digit" })}
          </div>
        </div>
        <div className="item__description" onClick={onClickHandler} title="Kliknij, aby przejść na listę produktów">
          <h2>{title}</h2>
          {productsCount ? (
            <span>Ilość produktów: {productsCount}</span>
          ) : (
            <span>Brak produktów na liście</span>
          )}
        </div>
      </Card>
    </li>
  );
}

export default Wishlist;
