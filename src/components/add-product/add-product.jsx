import { useState, useContext } from "react";

import Button from "../atoms/button/button";
import Input from "../atoms/input/input";

import WishlistContext from "../../store/wishlist-context";

function AddProduct() {
  // TODO: Use useReducer for product state
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0.01);

  const ctx = useContext(WishlistContext);

  const productsNames = ctx.selectedWishlist.products.map(
    (wishlist) => wishlist.title
  );

  const canUserSubmit =
    productName !== "" &&
    productPrice > 0 &&
    !productsNames.includes(productName);

  const handleSubmit = () => {
    ctx.addProduct(productName, productPrice);
    setProductName("");
    setProductPrice(0.01);
  };

  const handleNameInput = (e) => {
    setProductName(e.target.value);
  };

  const handlePriceInput = (e) => {
    setProductPrice(e.target.value);
  };

  return (
    <>
      <Input
        onChange={handleNameInput}
        value={productName}
        labelText="Nazwa"
        placeholderText="Wpisz nazwę produktu"
      />
      <Input
        type="number"
        onChange={handlePriceInput}
        value={productPrice}
        labelText="Cena"
        placeholderText="Wpisz nazwę produktu"
      />
      <Button
        onClick={handleSubmit}
        text="Zatwierdź"
        disabled={!canUserSubmit}
      />
    </>
  );
}

export default AddProduct;
