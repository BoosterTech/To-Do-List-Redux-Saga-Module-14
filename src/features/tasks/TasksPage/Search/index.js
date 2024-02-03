import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Wrapper } from "./styled";
import { SearchInput } from "./styled";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import searchQueryParamName from "./searchQueryParamName";

const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);
    if (target.value.trim() === "") {
      searchParams.delete(searchQueryParamName);
    } else {
      searchParams.set(searchQueryParamName, target.value);
    }
    history.push(`${location.pathname}?${searchParams.toString()}`);
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
