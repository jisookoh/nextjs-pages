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
                            생각이 많을때나 복잡할 때 산책하는 것을 좋아하고, 앉아있는 시간이 많음으로 인해 걷거나 뛰는 것을 좋아합니다.
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