import * as S from "./StyledSearch";
import ToggleSwitch from "./../MyPage/My/toggle";
import { useEffect, useState } from "react";
import { FitnessType } from "../../components";
import { userWorkoutAPI, userWorkoutBatchAPI } from "../../apis/API";

const Search = () => {
  // 토글

  const [visible, setVisible] = useState(false);
  const [machineList, setMachineList] = useState([]);
  console.log(machineList);

  const fetchData = async () => {
    const request = {
      searchKeyword: null,
      bodyPartKoreanName: null,
    };
    // 운동 기구 batch 조회(12개)
    const workoutResponse = await userWorkoutAPI.post(
      `/search/list/1`,
      request
    );
    setMachineList(workoutResponse.data);
  };

  const labels = {
    left: {
      title: "내 운동",
      value: "workout",
    },
    right: {
      title: "내 보조제",
      value: "supplement",
    },
  };

  const onChange = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.SearchContainer>
      <section className="searchTitleWrapper">
        <div className="searchTitleTextWrapper">
          <p className="searchTitle1">나에게 핏한 </p>
          <p className="searchTitle2">운동 정보를 찾아보세요</p>
        </div>
        <div className="toggleMenu">
          {/* <S.Toggle>
            <div class="toggleSwitch_wrap">
              <div class="toggleSwitch">
                <ToggleSwitch labels={labels} onChange={onChange} />
              </div>
            </div>
          </S.Toggle> */}
        </div>
      </section>
      <section className="searchBarWrapper">
        <button className="searchBarFilter"></button>
        <div className="searchBar"></div>
      </section>
      <section className="searchContentWrapper">
        {machineList.map((machine, idx) => {
          return (
            // 부위 map으로 처리해야함
            <FitnessType
              part={machine.bodyPartKoreanName}
              description={machine.description}
              imgPath={machine.imgPath}
            >
              {machine.koreanName}
            </FitnessType>
          );
        })}
      </section>
      <section className="serachButtonWrapper">
        <button>이전</button>
        <button>다음</button>
      </section>
    </S.SearchContainer>
  );
};

export default Search;
