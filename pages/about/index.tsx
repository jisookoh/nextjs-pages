import Image from "next/legacy/image";
import React from "react";
import styled from "styled-components";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HobbyContainer from "components/about/HobbyContainer";
import CharacterContainer from "components/about/CharacterContainer";

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
                    <HobbyContainer />
                </SectionWrapper>
            </Section>
            <Section number={3}>
                <h2>
                    <FontAwesomeIcon icon={faBriefcase} />
                    이런곳에서 일을 했습니다!
                </h2>
                <CharacterContainer />
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
                return`
                    margin-bottom: 10rem;
                `;
            case 3:
                return `
                    padding-bottom: 15rem;

                        > h2 {
                            display: flex;
                            align-items: center;
                            position: relative;
                            z-index: 2;
                        
                            &::after {
                                content: '';
                                display: block;
                                position: absolute;
                                bottom: 0;
                                left: 0;
                                width: 31rem;
                                height: 50%;
                                background-color: #e5ccee;
                                opacity: 0.5;
                                z-index: -1;
                            }

                            > svg {
                                width: 2.6rem;
                                height: 2.6rem;
                                margin-right: 15px;

                            >path {
                                color: #4b89dc;
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

