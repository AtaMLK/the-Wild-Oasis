/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import Spinner from "./Spinner";
import styled from "styled-components";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUSer";

const Fullpage = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1 Load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  //2 if there is NO authenticated user redirect to the /Login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  //3 while Loading , show the spinner
  if (isLoading)
    return (
      <Fullpage>
        <Spinner />
      </Fullpage>
    );

  //4if there IS a user render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
