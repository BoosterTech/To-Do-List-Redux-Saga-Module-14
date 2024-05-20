import { Wrapper } from "./styled";
import { SearchInput } from "./styled";
import searchQueryParamName from "./searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <Wrapper>
      <SearchInput
        type="text"
        placeholder="Filter tasks"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};

export default Search;
