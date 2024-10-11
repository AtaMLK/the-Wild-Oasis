import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";

export default function useDeleteBooking() {
  const queryCleint = useQueryClient();

  const { mutate: deleteBookingRow, isLoading: isDeleteingBookingRow } =
    useMutation({
      mutationFn: deleteBooking,
      onSuccess: () => {
        toast.success("Booking successfully deleted.");
        queryCleint.invalidateQueries({ queryKey: ["bookings"] });
      },
      onError: () => {
        toast.error("there is an error while trying to delete booking");
      },
    });
  return { deleteBookingRow, isDeleteingBookingRow };
}
