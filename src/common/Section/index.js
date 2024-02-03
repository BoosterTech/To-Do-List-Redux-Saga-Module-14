import React from "react";
import { Header, SectionContainer, Wrapper } from "./styled";

const Section = ({
  title,
  extraHeaderContent,
  bodyContent,
  id,
  headertype,
}) => (
  <Wrapper>
    <SectionContainer id={id}>
      <Header headertype={headertype}>{title}</Header>
      {extraHeaderContent}
    </SectionContainer>
    {bodyContent}
  </Wrapper>
);

export default Section;
