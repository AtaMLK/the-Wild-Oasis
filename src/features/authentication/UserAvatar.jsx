/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { useUser } from './useUser';

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

<<<<<<< HEAD
  console.log(user); // Log out user object to inspect the fullName field

  // Check if fullName is an object or string
  const fullNameString =
    typeof fullName === 'string' ? fullName : JSON.stringify(fullName);

=======
>>>>>>> auth
  return (
    <StyledUserAvatar>
      <Avatar
        src={avatar || 'default-user.jpg'}
<<<<<<< HEAD
        alt={`Avatar of ${fullNameString}`}
      />
      <span>{fullNameString}</span> {/* Render fullName as a string */}
=======
        alt={`Avatar of ${fullName}`}
      />
      <span>{fullName}</span>
>>>>>>> auth
    </StyledUserAvatar>
  );
}

export default UserAvatar;
