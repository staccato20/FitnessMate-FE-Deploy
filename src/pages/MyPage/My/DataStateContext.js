import React, { createContext, useContext, useReducer } from 'react';

// 루틴 목록용 더미데이터 
export const DUMMY_DATA = [
  {
    id: 0,
    text: '분할 1',
    name: 'first',
  },
  {
    id: 1,
    text: '분할 2',
    name: 'second',
  },
];

// 초기 상태 정의
const initialState = {
  items: [...DUMMY_DATA], // DUMMY_DATA를 초기 데이터로 사용
};

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


const DataStateContext = createContext();

export const DataStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataStateContext.Provider value={{ state, dispatch }}>
      {children}
    </DataStateContext.Provider>
  );
};

export const useDataState = () => {
  const context = useContext(DataStateContext);
  if (context === undefined) {
    throw new Error('useDataState must be used within a DataStateProvider');
  }
  return context;
};

export const useDataDispatch = () => {
  const context = useContext(DataStateContext);
  if (context === undefined) {
    throw new Error('useDataDispatch must be used within a DataStateProvider');
  }
  return context.dispatch;
};