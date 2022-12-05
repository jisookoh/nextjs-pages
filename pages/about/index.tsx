import Image from "next/legacy/image";
import React from "react";
import styled from "styled-components";

export default function About() {
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
                <h2>경력</h2>
                <ChracterisicList>
                    <ChracterisicListItem>
                        <div>
                            <h5>기간 : </h5>
                            <p>&nbsp;2021.06.07 ~ 2022.08.31</p>
                        </div>
                        <div>
                            <h5>회사명 : </h5>
                            <p>&nbsp;아솜</p>
                        </div>
                    </ChracterisicListItem>
                    <ChracterisicListItem>
                        <div>
                            <h5>기간 : </h5>
                            <p>&nbsp;2022.08.01 ~ 2022.10.21</p>
                        </div>
                        <div>
                            <h5>회사명 : </h5>
                            <p>&nbsp;AI Spera</p>
                        </div>
                    </ChracterisicListItem>
                </ChracterisicList>
            </Section>
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
                return `
                    padding-bottom: 150px;
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
    border-radius: 45%;
    box-shadow: -10px 10px 30px 0 rgba(0, 0, 0, 0.3);

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
`;

const Description = styled.p`
    font-size: 1.6rem;
    line-height: 1.8;
    word-break: keep-all;
`;

const ChracterisicList = styled.ol`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const ChracterisicListItem = styled.li`

    :not(:last-child) {
        margin-bottom: 20px;
    }

    > div {
        display : flex;
        align-items: center;
    }

    h5 {
        font-size: 2.0rem;
    }

    p {
        font-size: 1.8rem;
    }
`;