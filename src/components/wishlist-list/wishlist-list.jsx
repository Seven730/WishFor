import AddButton from "../atoms/add-button/add-button";
import Wishlist from "../wishlist/wishlist";
import AddWishlist from "../add-wishlist/add-wishlist";

function WishlistList({ data }) {
  return (
    <>
      {data &&
        data.map((item) => (
          <Wishlist
            key={item.id}
            id={item.id}
            date={new Date(item.date)}
            title={item.title}
            productsCount={item.products && item.products.length}
          />
        ))}
      <AddButton modalContent={<AddWishlist />} title="Dodaj listę" />
    </>
  );
}

export default WishlistList;
