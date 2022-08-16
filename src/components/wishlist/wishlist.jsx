import { useContext, useMemo } from "react";

import WishlistContext from "../../store/wishlist-context";

import Card from "../atoms/card/card";

const pfxItem = "item";

function Wishlist({ id, date, title, productsCount }) {
  const ctx = useContext(WishlistContext);

  const creationDate = useMemo(() => {
    return {
      month: date.toLocaleString("pl-PL", { month: "long" }),
      year: date.getFullYear(),
      day: date.toLocaleString("pl-PL", { day: "2-digit" }),
    };
  }, [date]);

  const onClickHandler = () => {
    ctx.selectWishlist(id);
  };

  const onDeleteHandler = () => {
    ctx.removeWishlist(id);
  };

  return (
    <li>
      <Card className={pfxItem}>
        <span
          className={`${pfxItem}__delete`}
          onClick={onDeleteHandler}
          title="Kliknij, aby usunąć tę listę"
        >
          &times;
        </span>
        <div className={`${pfxItem}-date`}>
          <div className={`${pfxItem}-date__month`}>{creationDate.month}</div>
          <div className={`${pfxItem}-date__year`}>{creationDate.year}</div>
          <div className={`${pfxItem}-date__day`}>{creationDate.day}</div>
        </div>
        <div
          className={`${pfxItem}__description`}
          onClick={onClickHandler}
          title="Kliknij, aby przejść na listę produktów"
        >
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
