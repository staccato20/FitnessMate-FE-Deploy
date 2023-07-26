import {
  BodyCompositionInput,
  ProfileInput,
  FitnessType,
  Search,
  SearchButton,
} from "../../components/index";

export const Home = () => {
  return (
    <>
      <br />
      <Search isClicked={false} />
      <br />
      <Search isClicked={true} />
      <br />
      <ProfileInput isChecked={true}>아이디</ProfileInput>
      <br />
      <ProfileInput isChecked={false}>아이디</ProfileInput>

      <br />
      <br />
      <br />
      <br />
      <BodyCompositionInput>골격근량</BodyCompositionInput>

      <FitnessType part={"가슴"}>런지</FitnessType>
      <SearchButton />
    </>
  );
};
