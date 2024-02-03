import { MainWrapper } from "../../common/MainWrapper/styled";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Content from "./authorPageContent";

const Author = () => (
  <MainWrapper>
    <Header title="O Autorze" />
    <Section
      title="Dariusz Podczasik"
      bodyContent={<Content />}
      headertype="section__author"
    />
  </MainWrapper>
);

export default Author;
