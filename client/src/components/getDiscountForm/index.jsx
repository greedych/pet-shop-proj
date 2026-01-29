import { Button, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  DiscountForm,
  DiscountFormStack,
  DiscountFormTitle,
  DiscountInput,
  DiscountSubmit,
  DogsImage,
} from "./styles";
import dogs from "../../assets/dogs.png";

function GetDiscountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = () => {
    console.log("submited");
    reset();
  };

  return (
    <DiscountFormStack>
      <DiscountFormTitle variant="h1">
        5% off on the first order
      </DiscountFormTitle>
      <Stack flexDirection={"row"}>
        <DogsImage src={dogs} />
        <DiscountForm action="submit" onSubmit={handleSubmit(onSubmit)}>
          <DiscountInput
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
          <DiscountInput
            label="Phone number"
            {...register("phone", { required: "Phone number is required!!!" })}
          />
          {errors.phone && (
            <Typography color="#ff7300" variant="body2">
              {errors.phone.message}
            </Typography>
          )}
          <DiscountInput
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

          <DiscountSubmit variant="contained" type="submit">
            Get a discount
          </DiscountSubmit>
        </DiscountForm>
      </Stack>
    </DiscountFormStack>
  );
}

export default GetDiscountForm;
