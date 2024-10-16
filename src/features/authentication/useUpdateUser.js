<<<<<<< HEAD
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCurrentUser } from '../../services/apiAuth';
import toast from 'react-hot-toast';
=======
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";
>>>>>>> auth

export default function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
<<<<<<< HEAD
      toast.success('User account successfully updated');
      queryClient.setQueryData(['user'], user);
    },
    onError: err => toast.error(err.message),
=======
      toast.success("User account successfully Updated!");
      queryClient.setQueryData(["users"], user);
      /*  queryClient.invalidateQueries({ queryKey: ["users"] }); */
    },
    onError: (err) => toast.error(err.message),
>>>>>>> auth
  });

  return { updateUser, isUpdating };
}
