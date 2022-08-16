import ReactDOM from "react-dom";

export const listTypes = {
  product: "product",
  wishlist: "wishlist",
};

export const Portal = ({ children }) => {
  return ReactDOM.createPortal(children, document.body);
};
