import toast from 'react-hot-toast';
import { updateBooking } from '../../services/apiBookings';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isPaid: isCheckingOut } = useMutation({
    mutationFn: bookingId =>
      updateBooking(bookingId, {
        status: 'checked-out',
      }),

    onSuccess: data => {
      toast.success(`booking #${data.id} successfully checked out`);
      queryClient.invalidateQueries({ avtive: false });
    },
    onError: () => {
      toast.error('there have been an error while checking out ');
    },
  });
  return { checkout, isCheckingOut };
}
