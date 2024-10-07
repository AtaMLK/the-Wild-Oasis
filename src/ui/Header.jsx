import styled from "styled-components";
import SignOut from "../features/authentication/SignOut";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 2.8rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

function Header() {
  return (
    <StyledHeader>
      <SignOut />
    </StyledHeader>
  );
}

export default Header;
