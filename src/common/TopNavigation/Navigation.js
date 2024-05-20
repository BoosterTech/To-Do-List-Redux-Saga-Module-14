import { toAuthor, toTasks } from "../../routes";
import { StyledList, StyledNavLink } from "./styled";

export const Navigation = () => {
  return (
    <StyledList>
      <li>
        <StyledNavLink to={toTasks()}>Tasks List</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to={toAuthor()}>About Author</StyledNavLink>
      </li>
    </StyledList>
  );
};
