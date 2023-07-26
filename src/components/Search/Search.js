import { SearchBox } from "./SearchStyledComponents";
import Search_Icon from "../../assets/images/Search_Icon.svg";

const Search = ({ isClicked }) => {
  return (
    <SearchBox isClicked={isClicked}>
      <img src={Search_Icon} alt="검색 아이콘" />
      {isClicked ? (
        <input />
      ) : (
        <input placeholder="운동명이나 운동 부위를 검색해보세요" />
      )}
    </SearchBox>
  );
};

export default Search;
