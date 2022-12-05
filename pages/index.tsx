import styled from "styled-components";
import Link from "next/link";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { newTopLists, newBottomLists, repairTopLists, repairBottomLists  } from "components/work/list";

export default function Home() {

    const newTopListData = [...newTopLists];
    const newBottomListData = [...newBottomLists];
    const reapairTopListData = [...repairTopLists];
    const reapairBottomListData = [...repairBottomLists];

    return (
        <MainWrapper>
            <WorkSection number={1}>
                <WorkSecWrapper>
                    <SectionMainTitleBox>
                        <SectionMainTitle>
                            JISOO KOH, <br />
                            PUBLISHER & FRONT END  <br />
                            PORTPOLIO
                        </SectionMainTitle>
                    </SectionMainTitleBox>
                    <SectionMainFlex>
                        <MailBox>
                            <Link href="mailto:gosjioo0312@naver.com">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </Link>
                        </MailBox>
                        <LeftTextBox>
                                {/* <p>
                                    The &quot;why&quot; and &quot;how&quot; of UX design is where I thrive.<br />
                                    Let&apos;s make amazing products with flexibility, speed, and quality!
                                </p> */}
                            </LeftTextBox>
                    </SectionMainFlex>
                </WorkSecWrapper>
            </WorkSection>

            <WorkSection number={2}>
                <WorkSecWrapper>
                    <TitleBox>
                        <WorkListTitle>New Project</WorkListTitle>
                        <Link href={"/works/new"}>More +</Link>
                    </TitleBox>
                    <WorkListWrapper moreWidth="left">
                        {newTopListData.map((v) => (
                            <WorkList key={v.title} background={v.webImage}>
                                <Link href={v.link}></Link>
                                <DescriptionBox>
                                    <Link href={v.link}>
                                        <h3>{v.title}</h3>
                                        <p>{v.desc}</p>
                                    </Link>
                                </DescriptionBox>
                            </WorkList>
                        ))}
                    </WorkListWrapper>
                    <WorkListWrapper moreWidth="right">
                        {newBottomListData.map((v) => (
                            <WorkList key={v.title} background={v.webImage}>
                                <Link href={v.link}></Link>
                                <DescriptionBox>
                                    <Link href={v.link}>
                                        <h3>{v.title}</h3>
                                        <p>{v.desc}</p>
                                    </Link>
                                </DescriptionBox>
                            </WorkList>
                        ))}
                    </WorkListWrapper>
                </WorkSecWrapper>
            </WorkSection>

            <WorkSection number={3}>
                <WorkSecWrapper>
                    <TitleBox>
                        <WorkListTitle>Maintance & Repair</WorkListTitle>
                    </TitleBox>
                    <WorkListWrapper moreWidth="left">
                        {reapairTopListData.map((v) => (
                            <WorkList key={v.title} background={v.webImage}>
                                <Link href={v.link}></Link>
                                <DescriptionBox>
                                    <Link href={v.link}>
                                        <h3>{v.title}</h3>
                                        <p>{v.desc}</p>
                                    </Link>
                                </DescriptionBox>
                            </WorkList>
                        ))}
                    </WorkListWrapper>
                    <WorkListWrapper moreWidth="center">
                        {reapairBottomListData.map((v) => (
                            <WorkList key={v.title} background={v.webImage}>
                                <Link href={v.link}></Link>
                                <DescriptionBox>
                                    <Link href={v.link}>
                                        <h3>{v.title}</h3>
                                        <p>{v.desc}</p>
                                    </Link>
                                </DescriptionBox>
                            </WorkList>
                        ))}
                    </WorkListWrapper>
                </WorkSecWrapper>
            </WorkSection>
        </MainWrapper>
    )
}


const MainWrapper = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding-top: 7rem;

    ${({ theme }) => theme.media.tabletL`
        padding-left: 20px;
        padding-right: 20px;
    `};
`;

const WorkSection = styled.section<{number : Number}>`
${({ number }) => {
    switch (number) {
        case 1:
            return `
                margin-bottom: 8rem;
            `;
        case 2:
            return `
                margin-bottom: 15rem;
            `;
        case 3:
            return `
                margin-bottom: 10rem;
            `;
    }
  }}
`;

const WorkSecWrapper = styled.article`
    position: relative;
`;

const SectionMainTitleBox = styled.div`
    margin-bottom: 30px;
`;

const SectionMainTitle = styled.h2`
    font-family: Montserrat, sans-serif;
    font-size: 6.6rem;
    line-height: 1.2;
    letter-spacing: -3px;
`;

const SectionMainFlex = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1 0 0;
`;

const MailBox = styled.div`
    display: inline-block;
    vertical-align: middle;

    & > a {
        display: block;
        width: 24px;
    }
`;

const LeftTextBox = styled.div`
    text-align:right;

    & > p {
        font-size: 1.6rem;
        line-height:1.4;
        margin: 0;
    }
`;

const WorkListWrapper = styled.ul<{moreWidth:String}>`
    list-style: none;
    position: static;
    display: grid;
    padding: 0;
    margin: 0;
    -webkit-box-align: stretch;
    align-items: stretch;
    grid-auto-flow: row;
    grid-auto-columns: 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-template-areas: ".";
    -ms-grid-rows: minmax(auto, 1fr);
    grid-template-rows: minmax(auto, 1fr);
    border-radius: 5px;

    ${({ moreWidth }) => {
        switch (moreWidth) {
            case 'left':
                return `
                    grid-template-columns: 350px 580px;
                    margin-bottom: 2%;
                `;
            case 'right':
                return `
                    grid-template-columns: 580px 350px;
                `;
            case 'center':
                return`
                    grid-template-columns: 100%;
                `;
        }
    }}

    ${({ theme }) => theme.media.tabletL`
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        align-items: stretch;
        margin-bottom: 20px;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
    `};
`;

const WorkList = styled.li<{background:String}>`
    position: relative;

    & > a {
        display: block;
        height: 400px;
        transition: all 0.5s;
        border-radius: 10px;
        overflow: hidden;
        background-image : ${({background}) => background ? `url("${process.env.NEXT_PUBLIC_IMAGES}${background}")` : ""};
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;

        &:hover {
            transform: scale(1.05);
            box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 1);
            border: 1px solid #999;
        }

        &::after {
            content: '';
            position: absolute;
            background: linear-gradient(to bottom,  rgba(0,0,0,0.9),  rgba(0,0,0,0.1));
            // backdrop-filter: blur(4px);
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            border-radius: 10px;
            overflow: hidden;
        }

        ${({ theme }) => theme.media.tabletL`
            height: 45rem;

            &:hover {
                transform: scale(1.02);
                box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 1);
            }

            &::after {
                background: linear-gradient(to bottom,  rgba(0,0,0,1),  rgba(0,0,0,0.1));
            }
        `};
    }


`;

const WorkListTitle = styled.h3`
    font-size: 3.6rem;
    font-weight: 700;
    font-family: Montserrat, sans-serif;
    margin: 0;
`;

const DescriptionBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    & > a {
        display: block;
        margin-top: 0px;
        padding-top: 4rem;
        padding-right: 3rem;
        padding-left: 4rem;
        padding-bottom: 3rem;

        > * {
            color: #fff;
        }

        > h3 {
            font-size: 2rem;
            margin-bottom: 15px;
        }

        > p {
            font-size: 1.4rem;
        }
    }
`;

const TitleBox = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 20px;

    & > a {
        display: inline-block;
        font-size: 1.6rem;
        font-family: Montserrat, sans-serif;
    }
`;

