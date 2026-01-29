import { useDispatch } from "react-redux";
import { recalculateCart } from "../../redux/slices/cartSlice";
import { AddButton } from "./styles";

function AddToCartButton({ product, quantity = 1, resetCounter }) {
  const dispatch = useDispatch();

  const AddToCart = (quantity = 1) => {
    const cartProducts = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cartProducts.find(
      (cartProduct) => cartProduct.id === product.id,
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = cartProducts.map((cartProduct) =>
        cartProduct.id === product.id
          ? { ...cartProduct, count: cartProduct.count + quantity }
          : cartProduct,
      );
    } else {
      updatedCart = [...cartProducts, { ...product, count: quantity }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    dispatch(recalculateCart());
    resetCounter();
  };

  return (
    <AddButton onClick={() => AddToCart(quantity)} variant="contained">
      Add to cart
    </AddButton>
  );
}

export default AddToCartButton;
