// dataReducer.js

// 액션 타입 정의
const actionTypes = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  // 다른 액션 타입들을 필요에 따라 추가할 수 있음
};

// 데이터 리듀서
const dataReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    // 다른 액션 처리 부분을 추가할 수 있음
    default:
      return state;
  }
};

export { actionTypes, dataReducer };
