import { useState, useContext } from "react";

import Button from "../atoms/button/button";
import Input from "../atoms/input/input";

import WishlistContext from "../../store/wishlist-context";

function AddWishlist() {
  const [wishlistName, setWishlistName] = useState("");
  const ctx = useContext(WishlistContext);

  const handleSubmit = () => {
    ctx.addWishlist(wishlistName);
    setWishlistName("");
  };

  const handleInput = (e) => {
    setWishlistName(e.target.value);
  };

  return (
    <>
      <Input
        onChange={handleInput}
        value={wishlistName}
        labelText="Nazwa listy"
        placeholderText="Wpisz nazwę listy"
      />
      <Button onClick={handleSubmit} text="Zatwierdź" />
    </>
  );
}

export default AddWishlist;
