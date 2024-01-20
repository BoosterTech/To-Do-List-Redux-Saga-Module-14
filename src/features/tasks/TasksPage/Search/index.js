import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Wrapper } from "./styled";
import { SearchInput } from "./styled";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get("search");

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);
    if (target.value.trim() === "") {
      searchParams.delete("search");
    } else {
      searchParams.set("search", target.value);
    }
    history.push(`${location.pathname}?${searchParams.toString()}`)
  };

  return (
    <Wrapper>
      <SearchInput
        type="text"
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};

export default Search;
