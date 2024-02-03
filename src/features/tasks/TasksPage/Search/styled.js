import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  padding: 15px;
  grid-template-columns: 1fr auto;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const SearchInput = styled.input`
  min-width: 150px;
  height: 10px;
  padding: 10px;
  border: 1px solid rgb(221, 215, 215);
`;
