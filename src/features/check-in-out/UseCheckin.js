import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { updateBooking } from "../../services/apiBookings";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function UseCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isPaid: isCheckingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, { status: "checked-in", isPaid: true }),

    onSuccess: (data) => {
      toast.success(`booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries({ avtive: false });
      navigate("/");
    },
    onError: () => {
      toast.error("there have been an error while checking in ");
    },
  });
  return { checkin, isCheckingIn };
}
