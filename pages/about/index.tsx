import Image from "next/legacy/image";
import React from "react";
import styled from "styled-components";

export default function About() {
    return(
        <>
            <Section>
                <SectionWrapper>
                    <Flex>
                        <ImageAside>
                            <Image 
                            src={`/${process.env.NEXT_PUBLIC_IMAGES}/images/jisooImg.jpg`} 
                            alt={"고지수 이미지"}
                            layout={"fill"}
                            ></Image>
                        </ImageAside>
                        <IntroduceWrapper>
                            <Title>안녕하세요! 고지수입니다.</Title>
                            <Description>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique soluta libero doloribus dicta error, delectus excepturi accusamus id saepe optio accusantium ipsum fugit sapiente ad, cupiditate, omnis enim perferendis illo.
                            </Description>
                            <ChracterisicList>
                                <li>Product Designer based in Seattle, United States</li>
                                <li>Product Designer based in Seattle, United States</li>
                                <li>Product Designer based in Seattle, United States</li>
                            </ChracterisicList>
                        </IntroduceWrapper>
                    </Flex>
                </SectionWrapper>
            </Section>
        </>
    )
}

const Section = styled.section`
    max-width: 960px;
    margin: 0 auto;
`;

const SectionWrapper = styled.article`
    position: relative;
`;

const Flex = styled.div`
    display: flex;
`;

const ImageAside = styled.aside`
    width: 40%;
    height: 510px;
    position: relative;
    overflow: hidden;
    border-radius: 45%;
    margin: 0 20px;
`;

const IntroduceWrapper = styled.aside`
    width: 60%;
    padding: 0 10px;
`;

const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
`;

const Description = styled.p`
    font-size: 16px;
    line-height: 1.8;
    word-break: keep-all;
`;

const ChracterisicList = styled.ol`
    list-style: none;
    padding: 0;
    margin: 0;
`;