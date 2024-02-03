import styled from "styled-components";

export const MainWrapper = styled.main`
  margin: auto;
  margin-top: 50px;
  width: 60vw;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 90vw;
    
  }
`;
