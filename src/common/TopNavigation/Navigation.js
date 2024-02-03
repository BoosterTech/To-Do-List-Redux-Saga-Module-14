import { StyledList, StyledNavLink } from "./styled";

export const Navigation = () => {
  return (
    <StyledList>
      <li>
        <StyledNavLink to="/tasks">Lista Zadań</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/author">O Autorze</StyledNavLink>
      </li>
    </StyledList>
  );
};
