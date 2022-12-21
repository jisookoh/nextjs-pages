// import { TUnauthType } from "store/interface";
import { Slice, ActionCreatorWithPayload, ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

export const getSliceActions = <R, S, F = string>(slice: Slice, type: string) => ({
  request: slice.actions[`${type}Request`] as ActionCreatorWithPayload<R, string>,
  success: slice.actions[`${type}Success`] as ActionCreatorWithPayload<S, string>,
  failure: slice.actions[`${type}Failure`] as ActionCreatorWithPayload<F, string>,
  end: slice.actions[`${type}End`] as ActionCreatorWithoutPayload,
  // exceed: slice.actions[`${type}Exceed`] as ActionCreatorWithPayload<F, TUnauthType>,
});

export const getSliceActionsWithoutPayload = <S, F = string>(slice: Slice, type: string) => ({
  request: slice.actions[`${type}Request`] as ActionCreatorWithoutPayload,
  success: slice.actions[`${type}Success`] as ActionCreatorWithPayload<S, string>,
  failure: slice.actions[`${type}Failure`] as ActionCreatorWithPayload<F, string>,
  end: slice.actions[`${type}End`] as ActionCreatorWithoutPayload,
  // exceed: slice.actions[`${type}Exceed`] as ActionCreatorWithPayload<F, TUnauthType>,
});

export const getSlicePostActions = <R, F = string>(slice: Slice, type: string) => ({
  request: slice.actions[`${type}Request`] as ActionCreatorWithPayload<R, string>,
  success: slice.actions[`${type}Success`] as ActionCreatorWithoutPayload,
  failure: slice.actions[`${type}Failure`] as ActionCreatorWithoutPayload,
  end: slice.actions[`${type}End`] as ActionCreatorWithoutPayload,
  // exceed: slice.actions[`${type}Exceed`] as ActionCreatorWithPayload<F, TUnauthType>,
});

export const getSlicePostActionsWithoutPayload = (slice: Slice, type: string) => ({
  request: slice.actions[`${type}Request`] as ActionCreatorWithoutPayload,
  success: slice.actions[`${type}Success`] as ActionCreatorWithoutPayload,
  failure: slice.actions[`${type}Failure`] as ActionCreatorWithoutPayload,
  end: slice.actions[`${type}End`] as ActionCreatorWithoutPayload,
  // exceed: slice.actions[`${type}Exceed`] as ActionCreatorWithPayload<string, TUnauthType>,
});

// 액션에 대한 타입 정의 -> axios 요청 보내지 않는 것들
export type TReduxAction = {
  SET: string;
  RESET: string;
};

export const reduxActionCreator = (prefix: string, actionName: string): TReduxAction => {
  const reduxTypeAction: string[] = ["SET_", "RESET_"];

  return {
    SET: prefix + reduxTypeAction[0] + actionName,
    RESET: prefix + reduxTypeAction[1] + actionName,
  };
};

// 비동기 액션에 대한 타입 정의 -> 비동기 액션 생성자 함수가 리턴하게 됨.
export type TAsyncAction = {
  REQUEST: string;
  SUCCESS: string;
  FAILURE: string;
  API_CALL: string;
  API_END: string;
  LIMIT_EXCEEDED: string;
};

export const asyncActionCreator = (actionName: string): TAsyncAction => {
  const asyncTypeAction: string[] = ["_REQUEST", "_SUCCESS", "_FAILURE", "_API_CALL", "_API_END", "_LIMIT_EXCEEDED"];

  return {
    REQUEST: actionName + asyncTypeAction[0],
    SUCCESS: actionName + asyncTypeAction[1],
    FAILURE: actionName + asyncTypeAction[2],
    API_CALL: actionName + asyncTypeAction[3],
    API_END: actionName + asyncTypeAction[4],
    LIMIT_EXCEEDED: actionName + asyncTypeAction[5],
  };
};
