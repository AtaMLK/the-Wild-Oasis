import styled from "styled-components";
import MainNav from "./MainNav";
<<<<<<< HEAD
import Uploader from "../data/Uploader";
=======
>>>>>>> auth
import Logo from "./Logo";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
<<<<<<< HEAD
      <Uploader />
=======
>>>>>>> auth
    </StyledSidebar>
  );
}

export default Sidebar;
