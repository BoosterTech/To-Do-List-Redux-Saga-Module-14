import { MainWrapper } from "../../common/MainWrapper/styled";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Content from "./authorPageContent";

const Author = () => (
  <MainWrapper>
    <Header title="About Author" />
    <Section
      title="Dariusz Podczasik"
      bodyContent={<Content/>}
      headertype="section__headerTop"
    />
  </MainWrapper>
);

export default Author;
