import { useContext } from "react";

import WishlistContext from "../../../store/wishlist-context";

import "./return-button.css";

function ReturnButton() {
  const ctx = useContext(WishlistContext);

  const onClickHandler = () => {
    ctx.resetSelect();
  };

  return (
    <button className="return-button" type="button" onClick={onClickHandler}>
      Powrót
    </button>
  );
}

export default ReturnButton;
