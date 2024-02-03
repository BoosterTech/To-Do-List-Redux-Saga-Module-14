import { StyledList, StyledNavLink } from "./styled";

export const Navigation = () => {
  return (
    <StyledList>
      <li>
        <StyledNavLink to="/tasks">Tasks</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/author">About Author</StyledNavLink>
      </li>
    </StyledList>
  );
};
