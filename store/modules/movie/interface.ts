import { AxiosError } from "axios"


export interface IMovie {
    boxofficeType: string,
    showRange: string,
    dailyBoxOfficeList: any,
}

export interface MovieState {
    loading: boolean;
    data: IMovie[] | any;
    error: AxiosError | null;
}