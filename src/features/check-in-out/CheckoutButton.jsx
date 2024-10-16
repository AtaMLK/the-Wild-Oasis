/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Button from "../../ui/Button";
import UseCheckout from "./UseCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = UseCheckout();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
