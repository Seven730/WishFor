import { useContext } from "react";
import classNames from "classnames";

import Card from "../atoms/card/card";
import Modal from "../atoms/modal/modal";

import WishlistContext from "../../store/wishlist-context";

import "./product.css";

const pfx = "product";

function Product({ date, title, price, bought, id }) {
  const ctx = useContext(WishlistContext);

  const allegroString = title.split(" ").join("+");

  const productClasses = classNames(pfx, {
    [`${pfx}--bought`]: bought,
  });

  const dateClickHandler = () => {
    ctx.changeProductState(id);
  };

  const onDeleteHandler = () => {
    ctx.removeProduct(id);
  };

  const onEditHandler = () => {};

  return (
    // <Modal>
    <li>
      <Card className={productClasses}>
        <span
          className="item__delete"
          onClick={onDeleteHandler}
          title="Kliknij, aby usunąć ten produkt"
        >
          &times;
        </span>

        <div
          className="item-date item-date--product"
          role="button"
          onClick={dateClickHandler}
          title={`Oznacz produkt jako ${bought ? "niezakupiony" : "zakupiony"}`}
        >
          {bought ? (
            <>Zakupiono</>
          ) : (
            <>
              <div className="item-date__month">
                {date.toLocaleString("pl-PL", { month: "long" })}
              </div>
              <div className="item-date__year">{date.getFullYear()}</div>
              <div className="item-date__day">
                {date.toLocaleString("pl-PL", { day: "2-digit" })}
              </div>
            </>
          )}
        </div>

        <div
          className={`${pfx}__description`}
          title={bought ? "" : "Edytuj pozycję"}
          onClick={onEditHandler}
        >
          <h2>{title}</h2>
          <div className={`${pfx}__price-container`}>
            <div className={`${pfx}__price`}>{price}</div>
            {!bought && (
              <a
                href={`https://allegro.pl/listing?string=${allegroString}`}
                target="_blank"
                rel="noreferrer"
                className={`${pfx}__allegro`}
              >
                Znajdź na Allegro
              </a>
            )}
          </div>
        </div>
      </Card>
    </li>
    // </Modal>
  );
}

export default Product;
