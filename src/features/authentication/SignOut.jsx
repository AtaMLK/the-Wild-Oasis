import { HiMiniArrowRightStartOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import useSignOut from "./useSignOut";

function SignOut() {
  const { signOut, isLoading } = useSignOut();
  return (
    <ButtonIcon disabled={isLoading} onClick={signOut}>
      <HiMiniArrowRightStartOnRectangle />
    </ButtonIcon>
  );
}

export default SignOut;
