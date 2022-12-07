type successCb<T> = (res: T) => void;
type failureCb<F> = (err: F) => void;
export type ReduxSuccess<T> = T | null;
export type ReduxError<T = string> = T | null;
export type ApiSuccess<T> = T | undefined;
export interface RequestCallback<T, F = any> {
  successCallback?: successCb<T>;
  failureCallback?: failureCb<F>;
}

export const UnauthTypes = {
  not_authorized: "not authorized",
  limit_exceeded: "limit exceeded",
  domain_search_limit_exceeded: "domain search limit exceeded",
  plan_expired: "plan expired",
} as const;

export type TUnauthType = typeof UnauthTypes[keyof typeof UnauthTypes];
export type UnauthError = TUnauthType | null;

export interface ISearchFilter {
  [key: string]: string;
}

export interface ISearchKeywordAndFilters {
  filters: ISearchFilter;
  search_keyword: string;
}

export interface ICommonAPIResponse<T = any> {
  status: number;
  message: string;
  data: T;
}
