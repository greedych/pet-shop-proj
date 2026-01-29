import {
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import TitledDivider from "../../components/titledDivider";
import { useNavigate } from "react-router-dom";
import CartProductCard from "../../components/cartProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  countTotal,
  getCartProducts,
  recalculateCart,
} from "../../redux/slices/cartSlice";
import {
  CartButton,
  CloseModalButton,
  ModalBox,
  PaymentForm,
  PaymentInput,
  PaymentStack,
  PaymentText,
} from "./styles";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import { postOrder } from "../../redux/slices/postSlice";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const count = useSelector((state) => state.cart.count);
  const total = useSelector((state) => state.cart.total);

  const [open, setOpen] = useState(null);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    try {
      dispatch(postOrder(data)).unwrap();
      console.log("submitted", data);
      reset();
      openModal();
      localStorage.removeItem("cart");
    } catch (error) {
      console.error("Send error", error);
    }
  };

  useEffect(() => {
    dispatch(getCartProducts());
    dispatch(countTotal());
  }, [dispatch]);
  useEffect(() => {
    if (!open) {
      dispatch(getCartProducts());
      dispatch(recalculateCart());
    }
  }, [open, dispatch]);

  const BackToStoreNavigate = () => {
    navigate("/products");
  };

  return (
    <Stack padding={5}>
      <TitledDivider
        title={"Shopping cart"}
        btnText={"Back to the store"}
        onClick={BackToStoreNavigate}
      />
      {cartProducts.length === 0 && (
        <Stack alignItems={"flex-start"} gap={4}>
          <Typography>
            Looks like you have no items in your basket currently.
          </Typography>
          <CartButton onClick={BackToStoreNavigate} variant="contained">
            Continue Shopping
          </CartButton>
        </Stack>
      )}
      {cartProducts.length > 0 && (
        <Stack flexDirection={"row"} gap={4} alignItems={"flex-start"}>
          <Stack flexDirection={"column"} gap={2} width="60%">
            {cartProducts.map((product) => (
              <CartProductCard key={product.id} {...product} />
            ))}
          </Stack>
          <PaymentStack>
            <Typography variant="h2">Order details</Typography>
            <PaymentText>{count} items</PaymentText>
            <Stack flexDirection={"row"} justifyContent={"space-between"}>
              <PaymentText>Total</PaymentText>
              <Typography variant="h1">${total}</Typography>
            </Stack>
            <PaymentForm action="submit" onSubmit={handleSubmit(onSubmit)}>
              <PaymentInput
                label="Name"
                {...register("name", {
                  required: "Name is required!!!",
                  minLength: { value: 2, message: "minimum 2 letters!!!" },
                })}
              />
              {errors.name && (
                <Typography color="#ff7300" variant="body2">
                  {errors.name.message}
                </Typography>
              )}
              <PaymentInput
                label="Phone number"
                {...register("phone", {
                  required: "Phone number is required!!!",
                })}
              />
              {errors.phone && (
                <Typography color="#ff7300" variant="body2">
                  {errors.phone.message}
                </Typography>
              )}
              <PaymentInput
                label="Email"
                {...register("email", {
                  required: "E-mail is required!!!",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid E-mail",
                  },
                })}
              />
              {errors.email && (
                <Typography color="#ff7300" variant="body2">
                  {errors.email.message}
                </Typography>
              )}
              <CartButton variant="contained" type="submit">
                Order
              </CartButton>
            </PaymentForm>
            <Modal open={open} onClose={closeModal}>
              <ModalBox>
                <Stack gap={3}>
                  <Typography color="#fff" variant="h2">
                    Congratulations!
                  </Typography>
                  <Typography color="#fff">
                    Your order has been successfully placed on the website.
                    <br />A manager will contact you shortly to confirm your
                    order.
                  </Typography>
                </Stack>
                <CloseModalButton>
                  <IconButton onClick={closeModal}>
                    <CloseIcon sx={{ color: "#fff" }} />
                  </IconButton>
                </CloseModalButton>
              </ModalBox>
            </Modal>
          </PaymentStack>
        </Stack>
      )}
    </Stack>
  );
}

export default Cart;
