import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import Image from "next/legacy/image";
import ScoreChart from "components/summary/ScoreChart";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


export default function ContentsDescription({qProject}) {

    const router = useRouter();
    const queryProject = router.query.project;
    const roundBoxRef = useRef<HTMLDivElement>(null);
    const [resultImgBool, setResultImgBool] = useState("");

    const data = qProject;

    useEffect(() => {
        let ScrollBool = false;
        window.addEventListener("scroll", () => {
          if (roundBoxRef?.current && roundBoxRef.current?.getBoundingClientRect().top < window.innerHeight / 1.5) {
            if (ScrollBool === false) {
              ScrollBool = true;
              setResultImgBool("is_active");
            }
          } else {
            if (ScrollBool === true) {
              ScrollBool = false;
              setResultImgBool("");
            }
          }
        });
      }, [roundBoxRef]);
    
    return (
        <ContributeWrapper>
            {data?.project !== queryProject 
            ? <MissingPage>404 존재하지 않는 페이지 입니다.</MissingPage> : 
            <React.Fragment>
                <TitleBox>
                    <Descrition align="center">{ data?.desc }</Descrition>
                </TitleBox>
                <DescriptionBox position="center" className={resultImgBool} ref={roundBoxRef}>
                <Flex>
                        <div className="workLoad">
                            <SubTitle>기여도</SubTitle>
                            {resultImgBool === "is_active" &&
                                <ScoreChart percent={ data?.contribute } />
                            }
                        </div>
                        <FlexCol>
                            <div>
                                <SubTitle>Technologies</SubTitle>
                                <TechList>
                                    {data?.tech.map((val, idx) => (
                                        <TechListItem key={idx}>
                                            <Image 
                                                src={val.icon} 
                                                width="20"
                                                height="20"
                                                alt={`${val.techName} icon`}
                                            />
                                            <span>{val.techName}</span>
                                        </TechListItem>
                                    ))}
                                </TechList>
                            </div>
                        </FlexCol>
                        <div>
                            <SubTitle>작업기간</SubTitle>
                            <Descrition>{data?.during}</Descrition>
                        </div>
                    </Flex>
                </DescriptionBox>

                <DescriptionBox position="center">
                    <ImageWrapper>
                        {data?.image && 
                            <Image 
                            src={data?.image} 
                            alt={`${data?.title} 목업 이미지`}
                            layout="fill"
                            />
                        }
                    </ImageWrapper>
                    <HomePageLink>
                        <a href={data?.link} target="_blank" rel="noreferrer noopener">
                            <span>홈페이지 이동</span>
                            <span className="Icon">
                            <FontAwesomeIcon icon={faChevronRight}  />
                            </span>
                        </a>
                    </HomePageLink>
                </DescriptionBox>
            </React.Fragment>
        }
        
        </ContributeWrapper>
    )
}


const ContributeWrapper = styled.article`
    padding-bottom: 100px;
`;

const TitleBox = styled.div`
    padding-bottom: 50px; 
    margin-bottom: 50px;
    position: relative;

    &::after {
        content: "";
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 10%;
        height: 3px;
        background-color: #333;
        opacity: 0.2;

    }
`;

const SubTitle = styled.h5`
    display: block;
    margin-right: 0px;
    margin-left: 0px;
    padding-left: 0px;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 20px;
    margin: 10px 0 ;
`

const Descrition = styled.p<{align?:String}>`
    margin-bottom: 15px;
    padding-right: 0px;
    font-size: 16px;
    line-height: 30px;
    -o-object-fit: fill;
    object-fit: fill;
    text-align: ${({align}) => align == "center" ? "center" : "left"};
    white-space: pre-line;
    word-break: keep-all;

`;

const DescriptionBox = styled.div<{position:String}>`
    ${({position}) => {
        switch (position) {
            case "center":
                return`
                    margin-bottom: 50px;
                `;

        }
    }}
`;

const Flex = styled.div`
    display: flex;
    margin-bottom: 30px;

    > div {
        padding-left: 10%;
        flex: 1 0 0;
    }
`;

const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`;

const TechList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const TechListItem =styled.li`
    display: flex;
    align-items: center;

    > span {
        width: calc(100% - 30px);
    }

    > span:not(:last-child) {
        margin-right: 15px !important;
    }

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;

const HomePageLink = styled.div`
    text-align:center;

    & > a {
        display: inline-block;
        max-width: 200px;
        width: 100%;
        border: 3px solid #3399ff;
        text-align: center;
        color: #3399ff;
        padding: 20px 0;
        text-transform: capitalize;
        position: relative;
        overflow: hidden!important;
        transition: all .3s ease-in-out;
        background: transparent!important;
        z-index: 10;
        font-weight: 500;
        border-radius: 5px;
        font-size: 16px;

        ::after {
            content: '';
            width: 0%;
            height: 100%;
            display: block;
            background: #3399ff;
            position: absolute;
            transform: skewX(-20deg);
            left: -10%;
            opacity: 0;
            top: 0;
            z-index: -15;
            transition: all .4s cubic-bezier(.2,.95,.57,.99);
            box-shadow: 2px 0px 14px rgb(0 0 0 / 60%);
        }

        :hover, :focus {
            color: #fff !important;
            border: 3px solid #3399ff;
            box-shadow: 0 10px 20px 0 rgba(0,0,0,0.15);
        }

        :hover::after, :focus::after {
            opacity: 1;
            width: 120%;
        }

        > span {
            display: inline-block;
            vertical-align: middle;
            margin-right: 10px;
        }

        > span.Icon {
            display: inline-block;
            vertical-align: middle;
            width: 12px;
            margin-right: 0;
            font-size: 0;
        }
    }
`;

const MissingPage = styled.div`
    height: 300px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
`;

const ImageWrapper = styled.div`
    position: relative;
    height: 453px;
    margin-bottom: 30px;
`;