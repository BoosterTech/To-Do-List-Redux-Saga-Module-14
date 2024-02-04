import { toAuthor, toTasks } from "../../routes";
import { StyledList, StyledNavLink } from "./styled";

export const Navigation = () => {
  return (
    <StyledList>
      <li>
        <StyledNavLink to={toTasks()}>Lista Zadań</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to={toAuthor()}>O Autorze</StyledNavLink>
      </li>
    </StyledList>
  );
};
