import { Store } from "redux";
import { configureStore, getDefaultMiddleware, EnhancedStore } from "@reduxjs/toolkit";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import createSagaMiddleware, { Task } from "redux-saga";
import rootSaga from "./modules/rootSaga";
import rootReducer from "./modules/rootReducer";

// Next Redux Toolkit Saga를 사용할때는
// confugureStore에서 강제로 sagaTask를 만들어주기 위함
export interface SagaStore extends Store {
  sagaTask?: Task;
}

// 스토어 생성: configureStore로

function getServerState() {
  return JSON.parse((document.getElementById("__NEXT_DATA__") as HTMLElement).textContent as string).props.pageProps.initialState;
}

export const store = () => {
  const devMode = process.env.NODE_ENV === "development"; // NODE_ENV가 "development"일 경우에만 참
  const sagaMiddleware = createSagaMiddleware(); // Saga Middleware 생성
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, ...getDefaultMiddleware({ thunk: false, serializableCheck: false })], // thunk 꺼주는 설정
    devTools: devMode,
    preloadedState: typeof window !== "undefined" ? getServerState() : undefined,
  });
  // Next Redux Toolkit 에서 saga를 사용해야할 때
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const setupStore = (context: any): EnhancedStore => store();

const makeStore: MakeStore<EnhancedStore> = (context) => setupStore(context);

const wrapper = createWrapper(makeStore, {
  // debug: process.env.NODE_ENV === "development", // 디버그 모드
});

export default wrapper;
