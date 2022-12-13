import Image from "next/legacy/image";
import React from "react";
import styled from "styled-components";
import { faMountainSun, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useDispatch, useSelector } from "react-redux";
// import { loadTvShowRequestAction } from "store/modules/tvShow/reducer";
// import { State } from "store/modules/rootReducer";

export default function About() {
    // const dispatch = useDispatch();
    // const { tvShowTitle, tvShowContents } = useSelector((state:State) => state.tvShow);
    // const onClickHero = useCallback((hero:string) => () => {
    //     dispatch(loadTvShowRequestAction(hero));
    // }, [dispatch]);
    return(
        <>
            <Section number={1}>
                <SectionWrapper>
                    <Flex>
                        <ImageAside>
                            <ImageWrapper>
                                <Image 
                                src={`/${process.env.NEXT_PUBLIC_IMAGES}/images/jisooImg.jpg`} 
                                alt={"고지수 이미지"}
                                layout={"fill"}
                                blurDataURL ={`/${process.env.NEXT_PUBLIC_IMAGES}/images/jisooImg.jpg`}
                                priority
                                />
                            </ImageWrapper>
                        </ImageAside>
                        <IntroduceWrapper>
                            <Title>
                                안녕하세요! 
                                <br />
                                프론트엔드 지원자 고지수입니다.
                            </Title>
                            <Description>
                            2021년 6월 멋모르고 시작한 퍼블리셔의 일은 즐거움이 되었고 미래가 되었습니다. 
                            <br />
                            다양한 상황과 압박으로 인해 지칠때도 있었지만, 이런 난관은 도약을 위한 발판이되었고
                            점차 발전하는 자신을 돌이켜보니 뿌듯함과 동시에 더 나은 결과물을 위하여 공부하고 연구했습니다.
                            <br />

                            단편적인 생각에서 복합적이게 생각하는 힘을 길렀고 퍼블리셔에 그치는 것이 아닌 프론트개발 혹은 그 이상의 목표까지 생기게 되었습니다. 
                            <br />
                            &#39;모르는 것이 부끄러운 것이 아니라 모르는걸 알면서도 머물러 있는 것이 부끄러운 것이다.&#39; 라는 마인드로 자신에게 부끄럽지 않게 더 넓고 더 깊은 지식을 갈망하고 있습니다.
                            </Description>
                        </IntroduceWrapper>
                    </Flex>
                </SectionWrapper>
            </Section>
            <Section number={2}>
                <SectionWrapper>
                    <HobbyTitle>
                        <FontAwesomeIcon icon={faMountainSun} />
                        이런 취미를 좋아합니다!
                    </HobbyTitle>
                    <HobbyList>
                        <HobbyListItem data-aos="flip-left" data-aos-duration="1000" data-aos-once="true">
                            <HobbyImageWrapper>
                                <Image 
                                    src={`/${process.env.NEXT_PUBLIC_IMAGES}/images/hobby1_1.jpg`} 
                                    width={"400"}
                                    height={"300"}
                                    layout={"fixed"}
                                    blurDataURL={`/${process.env.NEXT_PUBLIC_IMAGES}/images/hobby1_1.jpg`} 
                                    alt={'박람회 이미지1'}
                                    priority
                                />
                            </HobbyImageWrapper>
                            <HobbyDescWrapper>
                                <HobbyDescTitle>박람회 관람</HobbyDescTitle>
                                <HobbyDesc>
                                    다양한 박람회에 참가하여 새로운 제품들을 구경하거나 알지 못했던 것을 알아가는 것을 즐거워합니다.
                                </HobbyDesc>
                            </HobbyDescWrapper>
                        </HobbyListItem>
                        <HobbyListItem data-aos="flip-right" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
                            <HobbyImageWrapper>
                                <Image 
                                    src={`/${process.env.NEXT_PUBLIC_IMAGES}/images/hobby3.jpg`} 
                                    width={"350"}
                                    height={"500"}
                                    layout={"fixed"}
                                    blurDataURL={`/${process.env.NEXT_PUBLIC_IMAGES}/images/hobby2.jpg`} 
                                    alt={'박람회 이미지1'}
                                    priority
                                />
                            </HobbyImageWrapper>
                            <HobbyDescWrapper>
                                <HobbyDescTitle>문화체험</HobbyDescTitle>
                                <HobbyDesc>
                                    평소 집에 있는것을 좋아하나, 외출했을 때 전통적인 문화체험과 다른 동네의 분위기를 느끼는 것을 좋아합니다.
                                </HobbyDesc>
                            </HobbyDescWrapper>
                        </HobbyListItem>
                        <HobbyListItem data-aos="flip-left" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                            <HobbyImageWrapper>
                                <Image 
                                    src={`/${process.env.NEXT_PUBLIC_IMAGES}/images/hobby2.jpg`} 
                                    width={"400"}
                                    height={"600"}
                                    layout={"fixed"}
                                    blurDataURL={`/${process.env.NEXT_PUBLIC_IMAGES}/images/hobby2.jpg`} 
                                    alt={'박람회 이미지1'}
                                    priority
                                />
                            </HobbyImageWrapper>
                            <HobbyDescWrapper>
                                <HobbyDescTitle>산책</HobbyDescTitle>
                                <HobbyDesc>
                                    생각이 많을때나 복잡할 떄 산책하는 것을 좋아하고, 앉아있는 시간이 많음으로 인해 걷거나 뛰는 것을 좋아합니다.
                                </HobbyDesc>
                            </HobbyDescWrapper>
                        </HobbyListItem>
                        
                    </HobbyList>
                </SectionWrapper>
            </Section>
            <Section number={3}>
                <h2>
                    <FontAwesomeIcon icon={faBuilding} />
                    이런곳에서 일을 했습니다!
                </h2>
                <ChracterisicList>
                    <ChracterisicListItem>
                        <div>
                            <h5>기간 : </h5>
                            <p>&nbsp;2021.06.07 ~ 2022.08.31</p>
                        </div>
                        <div>
                            <h5>직무 : </h5>
                            <p>&nbsp;퍼블리셔</p>
                        </div>
                        <div>
                            <h5>회사명 : </h5>
                            <p>&nbsp;아솜<strong>(웹 에이전시)</strong></p>
                        </div>
                        <div>
                            <h5>퇴사사유 : </h5>
                            <p>&nbsp;직무변경</p>
                        </div>
                    </ChracterisicListItem>
                    <ChracterisicListItem>
                        <div>
                            <h5>기간 : </h5>
                            <p>&nbsp;2022.08.01 ~ 2022.10.21</p>
                        </div>
                        <div>
                            <h5>직무 : </h5>
                            <p>&nbsp;프론트엔드</p>
                        </div>
                        <div>
                            <h5>회사명 : </h5>
                            <p>&nbsp;AI Spera<strong>(보안)</strong></p>
                        </div>
                        <div>
                            <h5>퇴사사유 : </h5>
                            <p>&nbsp;개인사유(건강이슈)</p>
                        </div>
                    </ChracterisicListItem>
                </ChracterisicList>
            </Section>
            {/* <Section number={3}>
                <button onClick={onClickHero('superman')}>슈퍼맨</button>
                <button onClick={onClickHero('batman')}>배트맨맨</button>
                { tvShowTitle && <div>{tvShowTitle}</div> }
                <br />
                {tvShowContents && (            
                    <div>
                        {tvShowContents.map((show) => {
                            <div key={show.id}>
                                <a href={show.url}>{show.name}</a>
                                <div>점수 : {show.score}</div>
                                <div>타입 : {show.type}</div>
                                <div>언어 : {show.language}</div>
                            </div>
                        })}
                    </div>
                )}
            </Section> */}
        </>
    )
}

const Section = styled.section<{number: Number}>`
    max-width: 960px;
    margin: 0 auto;

    > h2 {
        font-size: 2.4rem;
        margin-bottom: 3rem;
    }

    ${({ number }) => {
        switch (number) {
            case 1:
                return `
                    padding-top: 100px;
                    margin-bottom: 100px;
                `;
            case 2:
                return`
                    margin-bottom: 10rem;
                `;
            case 3:
                return `
                    padding-bottom: 15rem;

                        > h2 {
                            display: flex;
                            align-items: center;

                            > svg {
                                width: 2.2rem;
                                height: 2.6rem;
                                margin-right: 15px;

                            >path {
                                color: #999;
                            }
                        }
                    }
                `;
        }
    }}

    ${({ theme }) => theme.media.tabletL`
        padding-left: 20px;
        padding-right: 20px;

        ${({ number }) => {
            switch (number) {
                case 1:
                    return`
                        padding-top: 6rem;
                        margin-bottom: 8rem;
                    `;
            }
        }}
    `};
`;

const SectionWrapper = styled.article`
    position: relative;
`;

const Flex = styled.div`
    display: flex;
    align-items: center;

    ${({ theme }) => theme.media.tablet`
        flex-wrap: wrap;

        > aside {
            width: 100%;
        }
    `}
`;

const ImageAside = styled.aside`
    width: 40%;
    margin: 0 20px;
    
    ${({ theme }) => theme.media.tablet`
        text-align: center;
        margin: 0;
        margin-bottom: 7rem;
    `}
`;

const ImageWrapper = styled.div`
    height: 510px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    // box-shadow: -10px 10px 30px 0 rgba(0, 0, 0, 0.3);

    ${({ theme }) => theme.media.tabletL`
        height: auto;

        > span {
            position: relative !important;

            > img {
                width: 100% !important;
                height: 100% !important;
                position: relative !important;
            }
        }
    `}

    ${({ theme }) => theme.media.tablet`
        text-align: center;
        width: 60%;
        display: inline-block;
    `}
`;

const IntroduceWrapper = styled.aside`
    width: 60%;
    padding: 0 10px;
`;

const Title = styled.h2`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 30px;
    word-break: keep-all;
`;

const Description = styled.p`
    font-size: 1.6rem;
    line-height: 1.8;
    word-break: keep-all;
`;

const ChracterisicList = styled.ol`
    display: flex;
    flex-wrap: wrap;
`;

const ChracterisicListItem = styled.li`
    flex: 1 0 0;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px 30px;
    background-color: #fff;
    // box-shadow: 0 20px 30px 0 rgba(0,0,0,0.1);

    :not(:last-child) {
        margin-right: 3%;
    }

    > div {
        display : flex;
        align-items: center;

        &:not(:last-child) {
            margin-bottom: 1rem;
        }
    }

    h5 {
        font-size: 1.8rem;
    }

    p {
        font-size: 1.8rem;
    }

    ${({ theme }) => theme.media.tablet`
        flex: none;
        width: 100%;

        :not(:last-child) {
            margin-right: 0;
            margin-bottom: 20px;
        }
    `}
`;

const HobbyTitle = styled.h2`
    font-size: 2.4rem;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;

    > svg {
        width: 2.4rem;
        height: 2.6rem;
        margin-right: 15px;
        

        >path {
            color: #009900 !important;
        }
    }
`;

const HobbyList = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;

const HobbyListItem = styled.li`
    width: 32%;

    &:not(:last-child) {
        margin-right: 2%;
    }

    ${({ theme }) => theme.media.tablet`
        width: 49%;
        margin-bottom: 5rem;

        &:not(:last-child) {
            margin-right: 0;
        }
        &:not(:nth-child(2n)) {
            margin-right: 2%;
        }
    `}

    ${({ theme }) => theme.media.mobileL`
        width: 100%;
        margin-bottom: 0;

        &:not(:last-child) {
            margin-bottom: 4rem;
        }
        &:not(:nth-child(2n)) {
            margin-right: 0;
        }
    `}
`;

const HobbyImageWrapper = styled.div`
    position: relative;
    height: 300px;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 20px;

    > span {
        position: relative !important;
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%);
    }

    ${({ theme }) => theme.media.tablet`
        height: 30rem;
    `}
`;

const HobbyDescWrapper = styled.div`
    position: relative;
`;

const HobbyDescTitle = styled.h4`
    font-size: 2rem;
    margin-bottom: 10px;
`;

const HobbyDesc = styled.p`
    font-size: 1.6rem;
    line-height: 1.6;
    word-break: keep-all;
`;