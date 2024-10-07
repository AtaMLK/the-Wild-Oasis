import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut as signOutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export default function useSignOut() {
  const queryCleint = useQueryClient();
  const navigate = useNavigate();
  const { mutate: signOut, isLoading } = useMutation({
    mutationFn: signOutApi,
    onSuccess: () => {
      queryCleint.removeQueries();
      navigate("/login", { replace: true });
    },
  });
  return { signOut, isLoading };
}
