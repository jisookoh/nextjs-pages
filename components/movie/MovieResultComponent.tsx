import React from "react";
import styled from "styled-components";
import Image from "next/legacy/image";

interface IResultComponent {
  data: any;
  success: any;
  loading: boolean;
  failure?: any;
}

export default function MovieResultComponent({
  data,
  success,
  loading,
}: IResultComponent) {
  return (
    <>
      <MovieListContainer>
        <MovieListWrapper>
          {loading ? (
            <MovieListItems>
              <ListTitle>
                <ImagesWrapper>
                  <Image
                    src={`/${process.env.NEXT_PUBLIC_IMAGES}/images/loading.gif`}
                    width={"40"}
                    height={"40"}
                    layout={"fixed"}
                    blurDataURL={`/${process.env.NEXT_PUBLIC_IMAGES}/images/loading.gif`}
                    alt={"로딩 중"}
                    priority
                  />
                </ImagesWrapper>
              </ListTitle>
            </MovieListItems>
          ) : data.data?.faultInfo?.errorCode ? (
            <MovieListItems>
              <ListTitle>
                올바른 형식으로 다시 시도해주세요.
                <strong>(ex. 20221220)</strong>
              </ListTitle>
            </MovieListItems>
          ) : (
            success &&
            success.boxOfficeResult?.dailyBoxOfficeList.map((val, idx) => (
              <MovieListItems key={idx}>
                <MovieTitle>{val.movieNm}</MovieTitle>
                <ListFlex>
                  <ListTitle>누적관객수 : </ListTitle>
                  <ListDesc>
                    {val.audiAcc} <em>명</em>
                  </ListDesc>
                </ListFlex>
                <ListFlex>
                  <ListTitle>영화개봉일 : </ListTitle>
                  <ListDesc>{val.openDt}</ListDesc>
                </ListFlex>
                <RankWrapper rank={val.rank}>
                  <Rank>{val.rank}위</Rank>
                </RankWrapper>
              </MovieListItems>
            ))
          )}
        </MovieListWrapper>
      </MovieListContainer>
    </>
  );
}

const MovieListContainer = styled.div``;

const MovieListWrapper = styled.ul``;

const MovieListItems = styled.li`
  padding: 3rem 2rem;
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
`;

const MovieTitle = styled.h2`
  font-size: 2.6rem;
  margin-bottom: 2rem;
  max-width: 80%;
  word-break: keep-all;
`;

const ListFlex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const ListTitle = styled.h3`
  font-size: 1.8rem;

  > strong {
    font-size: 1.4rem;
    color: #999;
    display: block;
  }
`;

const ListDesc = styled.p`
  font-size: 1.8rem;
  padding-left: 1rem;

  > em {
    font-size: 1.4rem;
    font-style: normal;
  }
`;

const ImagesWrapper = styled.div`
  text-align: center;
  padding-top: 3rem;
`;

const RankWrapper = styled.div<{ rank: string }>`
  position: absolute;
  top: 2rem;
  right: 20px;
  width: 3.3rem;
  height: 4.2rem;
  background-image: url(${({ rank }) => {
    switch (rank) {
      case "1":
        return `
                        ${process.env.NEXT_PUBLIC_IMAGES}/images/rank_icon1.png
                    `;
      case "2":
        return `
                        ${process.env.NEXT_PUBLIC_IMAGES}/images/rank_icon2.png
                    `;
      case "3":
        return `
                        ${process.env.NEXT_PUBLIC_IMAGES}/images/rank_icon3.png
                    `;
      default:
        return `
                        ${process.env.NEXT_PUBLIC_IMAGES}/images/rank_icon.png
                    `;
    }
  }});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
  padding-top: 3px;
`;

const Rank = styled.h6`
  font-size: 1.2rem;
  color: #fff;
`;
