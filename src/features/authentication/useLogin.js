import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogin() {
  const queryCleint = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      queryCleint.setQueryData(["user", user]);
      console.log(user), navigate("/dashboard");
    },
    onError: (err) => {
      console.log("Error", err);
      toast.error("Provided Email or password are incorrect");
    },
  });
  return { login, isLoading };
}
