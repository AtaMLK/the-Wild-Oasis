import styled from "styled-components";
import SignOut from "../features/authentication/SignOut";
import { HiOutlineUser } from "react-icons/hi";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
=======
import DarkModeToggle from "./DarkModeToggle";
>>>>>>> auth

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon>
          <HiOutlineUser onClick={() => navigate("/account")} />
        </ButtonIcon>
      </li>
      <li>
<<<<<<< HEAD
=======
        <DarkModeToggle />
      </li>
      <li>
>>>>>>> auth
        <SignOut />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
