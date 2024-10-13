import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCurrentUser } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export default function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
<<<<<<< HEAD
      toast.success("User account successfully Updated!");
      queryClient.setQueryData(["users"], user);
      /*  queryClient.invalidateQueries({ queryKey: ["users"] }); */
=======
      toast.success('User account successfully Updated!');
      queryClient.setQueryData(['user'], user);
>>>>>>> 913531a17a3b93ec09bb1387f6421e39df675478
    },
    onError: err => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
