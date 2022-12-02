import React from "react";
import styled from "styled-components";
import Image from "next/legacy/image";
import { newLists } from "components/work/list";
import NewProjectList from "components/work/NewProjectList";

export default function newProject() {

    return(
        <>
            <SubWrapper>
                <BannerWrapper>
                    <Image 
                        src={`/${process.env.NEXT_PUBLIC_IMAGES}/images/exImg.jpg`}
                        layout="fill"
                        objectFit="cover"
                        alt="프로젝트 배너"
                        priority
                    />
                    <BannerTitle>NEW PROJECT</BannerTitle>
                </BannerWrapper>
                <SubSection>
                    <SectionWrapper number={1}>
                        <NewProjectList newList={newLists}></NewProjectList>
                    </SectionWrapper>
                </SubSection>
            </SubWrapper>
        </>
    )
}

const SubWrapper = styled.div`
    position: relative;
`;

const BannerWrapper = styled.figure`
    height: 300px;
    background-color: #333;
    margin: auto 0;
    position: relative;
    overflow: hidden;
    margin-bottom: 10rem;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    ${({ theme }) => theme.media.tabletL`
        height: 200px;
    `};
`;

const BannerTitle = styled.h2`
    font-size: 3.0rem;
    font-weight: 500;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
    transform: translateY(-50%);
    z-index: 2;
    margin: 0;
    padding: 0;
`;

const SubSection = styled.section`
    position: relative;
    max-width: 960px;
    margin: 0 auto;

    ${({ theme }) => theme.media.tabletL`
        padding: 0 20px;
    `};
`;

const SectionWrapper = styled.article<{number:Number}>`
    position: relative;
    margin-bottom: 10rem;
`;