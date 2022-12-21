import React from "react";
import { Parallax } from "react-skrollr";
import styled from "styled-components";

export default function MovieDescription() {
        const data1 = {
        "data-bottom-top": "opacity: 1; background-color: rgb(0,0,0); width: 100%; visiblity: visible; height: 100%;",
        "data-center-center": "opacity: 1; background-color: rgb(0,0,0); height: 100%;",
        "data-top-bottom": "opacity: 0; background-color: rgb(255,255,255); z-index: -1; visiblity: hidden; height: 0;"
    };

    const data2 = {
        "data-top": "transform: scale(1); height: 100vh;",
        "data--300-top": "transform: scale(10); opacity: 1; height: 100vh;",
        "data--500-top": "opacity: 0; height: 0"
    };

    const data3 = {
        "data--600-top": "opacity: 0; transform: translateX(-5%);",
        "data--1000-top": "opacity: 1; transform: translateX(0%);",
        "data--1700-top": "opacity: 1; transform: translateX(0%);",
        "data--1900-top": "opacity: 0; transform: translateX(10%);"
    }

    return(
        <>
            <Fixed>
                <Parallax data={data1}>
                    <Parallax data={data2}>
                        <FixedSecond>
                            <MovieSecTitle>
                                일별 박스오피스 API
                            </MovieSecTitle>
                        </FixedSecond>
                    </Parallax>
                    
                    <MovieFirstContentsWrap>
                        <AbsolutCenter>
                            <Parallax data={data3}>
                                <MovieSecDesc>
                                    해당 페이지는 영화진흥원의 Open API를 활용한 영화 일일 박스 오피스 검색 페이지 이며,
                                </MovieSecDesc>
                            </Parallax>
                            <Parallax data={data3}>
                                <MovieSecDesc>
                                    검색 일자에 따른 일일 박스오피스 순위를 나타내는 application 입니다.
                                </MovieSecDesc>
                            </Parallax>
                            <Parallax data={data3}>
                                <MovieSecDesc>
                                    효율적인 전역상태관리를 위하여 Redux-Toolkit과 Redux-Saga를 활용하여 API 통신을 진행하였고,
                                </MovieSecDesc>
                            </Parallax>
                            <Parallax data={data3}>
                                <MovieSecDesc>
                                    react-skrollr 라이브러리를 활용하여 스크롤에 따른 효과를 주었습니다.
                                    <strong>(*mobile에서 동작하지 않은 오류가 있어 방법을 찾는 중입니다.)</strong>
                                </MovieSecDesc>
                            </Parallax>
                            <Parallax data={data3}>
                                <MovieSecDesc>
                                    검색 창엔 takeLatest를 통한 여러번의 클릭 방지와 정규표현식을 통한 validation체크 작업을 진행하였습니다.
                                </MovieSecDesc>
                            </Parallax>
                        </AbsolutCenter>
                    </MovieFirstContentsWrap>
                </Parallax>
            </Fixed>
        </>
    )
}

const MovieSecTitle = styled.h2`
    font-size: 3rem;
    color: #fff;
`;

const MovieSecDesc = styled.p`
    line-height: 2;
    font-size: 1.8rem;
    color: #fff;

    > strong {
        font-size: 1.4rem;
        color: #f05650;
        display: block;
    }
`;

const MovieFirstContentsWrap = styled.div`
    height: 200vh;
    position: relative;
`;

const Fixed = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 400vh;
    text-align: center;
    display: flex;
    justify-content: center;
`;

const FixedSecond = styled.div`
    position: fixed;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    display: inline-block;
`;

const AbsolutCenter = styled.div`
    position: relative;
    top: 25%;
    left: 0;
    width: 100%;
    text-align: center;
    transform: translateY(-50%);

    ${({ theme }) => theme.media.tabletL`
        padding: 0 20px;
    `}
`;