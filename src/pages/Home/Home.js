import {
  BodyCompositionInput,
  ProfileInput,
  FitnessType,
  Search,
  SearchButton,
} from "../../components/index";

const Home = () => {
  return (
    <>
      <Search />
      <br />
      <ProfileInput isChecked={true} placeholder="아이디를 입력해주세요">
        아이디
      </ProfileInput>
      <br />
      <ProfileInput isChecked={false} placeholder="아이디를 입력해주세요">
        아이디
      </ProfileInput>
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
export default Home;
