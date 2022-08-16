import { useContext, useMemo } from "react";
import classNames from "classnames";

import Card from "../atoms/card/card";

import WishlistContext from "../../store/wishlist-context";

import "./product.css";

const pfx = "product";
const pfxItem = "item";

function Product({ date, title, price, bought, id }) {
  const ctx = useContext(WishlistContext);

  const creationDate = useMemo(() => {
    return {
      month: date.toLocaleString("pl-PL", { month: "long" }),
      year: date.getFullYear(),
      day: date.toLocaleString("pl-PL", { day: "2-digit" }),
    };
  }, [date]);

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

  return (
    <li>
      <Card className={productClasses}>
        <span
          className={`${pfxItem}__delete`}
          onClick={onDeleteHandler}
          title="Kliknij, aby usunąć ten produkt"
        >
          &times;
        </span>

        <div
          className={classNames(`${pfxItem}-date`, `${pfxItem}-date--product`)}
          role="button"
          onClick={dateClickHandler}
          title={`Oznacz produkt jako ${bought ? "niezakupiony" : "zakupiony"}`}
        >
          {bought ? (
            <>Zakupiono</>
          ) : (
            <>
              <div className={`${pfxItem}-date__month`}>
                {creationDate.month}
              </div>
              <div className={`${pfxItem}-date__year`}>{creationDate.year}</div>
              <div className={`${pfxItem}-date__day`}>{creationDate.day}</div>
            </>
          )}
        </div>

        <div
          className={`${pfx}__description`}
          title={bought ? "" : "Edytuj pozycję"}
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
  );
}

export default Product;
