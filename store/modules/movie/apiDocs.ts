
const baseUrl = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
const apiKey = process.env.NEXT_PUBLIC_MOVIE_API_KEY;

export const apiDocs = {
    boxOffice: `${baseUrl}?key=${apiKey}&targetDt=`,
}