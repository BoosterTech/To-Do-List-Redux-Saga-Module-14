import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.color.White};
  margin: 10px 0;
  padding: 0 10px 10px;
`;

export const SectionContainer = styled.div`
  background-color: ${({ theme }) => theme.color.White};
  margin: 10px 0;

  ${(props) =>
    props.id === "section__flex" &&
    `
      display: flex;
      flex-direction: row;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      flex-direction: column;
      } 
    `}
`;

export const Header = styled.h2`
  ${(props) =>
    props.headertype === "section__headerTop" &&
    `
    padding: 30px 0 0 15px;
    font-weight: bold;
    font-size: large;
    `}

  ${(props) =>
    props.headertype === "section__header" &&
    `
      padding: 15px;
      font-weight: bold;
      font-size: large;
    `}
`;
