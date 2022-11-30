import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import ContentsDescription from "components/summary/ContentsDescription";
import { ChartContent } from "components/summary/chartContents";
import Image from "next/legacy/image";


export default function WorkProject() {

    const router = useRouter();
    const queryProject = router.query.project;
    const datas = ChartContent.data;

    const project = datas.find(function(x) {
        return x.project === queryProject
    })


    return (
        <>
            <SubSection number={1}>
                <BannerWrapper>
                    {project?.banner ? (
                        <Image 
                            src={project.banner} 
                            layout="fill"
                            objectFit="cover"
                            alt="프로젝트 배너"
                            priority
                        /> 
                        ): (
                        <Image 
                            src="/images/exImg.jpg" 
                            layout="fill"
                            objectFit="cover"
                            alt="프로젝트 배너"
                            priority
                        />
                    )}
                    <BannerTitle>{project?.title}</BannerTitle>
                </BannerWrapper>
            </SubSection>
            <SubSection number={2}>
                <ContentsDescription qProject={project} />
            </SubSection>
        </>
    );
    }

const SubSection = styled.section<{number:Number}>`
    position: relative;

    ${({number}) => {
        switch (number) {
            case 1:
                return`
                    margin-bottom: 70px;
                `;
            case 2:
                return`
                    max-width: 960px;
                    margin: 0 auto;
                `;
        }
    }}
`;

const BannerWrapper = styled.figure`
    height: 300px;
    background-color: #333;
    margin: auto 0;
    position: relative;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
`;

const BannerTitle = styled.h2`
    font-size: 24px;
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
`
