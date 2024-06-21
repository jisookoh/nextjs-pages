import React from "react";
import Image from "next/legacy/image";
import styled from "styled-components";
import { faMountainSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function HobbyContainer() {
    return(
        <>
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
                            src={`/${process.env.NEXT_PUBLIC_IMAGES}/images/hobby_read_a_book.jpg`}
                            width={"350"}
                            height={"350"}
                            layout={"fixed"}
                            blurDataURL={`/${process.env.NEXT_PUBLIC_IMAGES}/images/hobby_read_a_book.jpg`}
                            alt={'책 이미지'}
                            priority
                        />
                    </HobbyImageWrapper>
                    <HobbyDescWrapper>
                        <HobbyDescTitle>책 읽기</HobbyDescTitle>
                        <HobbyDesc>
                            기술서적, 에세이, 문학 등 다양한 서적을 읽는 것에 흥미가 있으며, 경험해보지 못하거나 알지 못한 지식을 간접적으로 체험하는 것을 좋아합니다.
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
                            alt={'산책로 이미지'}
                            priority
                        />
                    </HobbyImageWrapper>
                    <HobbyDescWrapper>
                        <HobbyDescTitle>달리기</HobbyDescTitle>
                        <HobbyDesc>
                            생각이 많을때나 복잡할 때 달리면서 생각에 휴식을 취하고 스트레스를 해소하는 것을 선호합니다.
                        </HobbyDesc>
                    </HobbyDescWrapper>
                </HobbyListItem>
                
            </HobbyList>
        </>
    )
}

const HobbyTitle = styled.h2`
    font-size: 2.4rem;
    margin-bottom: 3rem;
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
        width: 29rem;
        height: 50%;
        background-color: #d0ee17;
        opacity: 0.5;
        z-index: -1;
    }

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