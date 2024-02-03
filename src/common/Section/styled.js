import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.color.White};
  margin: 10px 0;
  padding: 0 10px 10px;
  padding-bottom: 35px;
`;

export const SectionContainer = styled.div`
  background-color: ${({ theme }) => theme.color.White};
  margin: 10px 0;
  display: flex;

  ${(props) =>
    props.id === "section__flex" &&
    `
      flex-direction: row;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      flex-direction: column;
      }  
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
  }
`;

export const Header = styled.h2`
  font-weight: bold;
  font-size: large;

  ${(props) =>
    props.headertype === "section__headerTop" &&
    `
    padding: 30px 0 0 15px;

    `}

  ${(props) =>
    props.headertype === "section__header" &&
    `
      padding: 15px;
     
    `}

    ${(props) =>
    props.headertype === "section__author" &&
    `
    padding: 15px 0 0 0px;
   
    `}

@media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
  }
`;
