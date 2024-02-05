import styled from "styled-components";

export const Wrapper = styled.span`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
  margin-right: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
    margin-right: 0;
    margin-bottom: 10px;
    gap: 0;
  }
`;
