import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: center;
  margin: auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.Teal};
  text-decoration: none;
  gap: 2rem;
  width: 100%;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.White};
  font-size: medium;
  &.active {
    font-weight: bold;
  }
`;
