import React from "react";
import { ParallaxProvider } from "react-skrollr";
import styled from "styled-components";
import MovieDescription from "./MovieDescription";
import MovieSearchForm from "./MovieSearchForm";

export default function MovieParallaxComponent() {



    return(
        <MovieSectionContainer>
             <ParallaxProvider
                init={{
                    smoothScrollingDuration: 500,
                    smoothScrolling: true,
                    forceHeight: false,
                }}
            >
                <MovieSection section={1}>
                    <MovieDescription />
                </MovieSection>
                <MovieSection section={2}>
                    <MovieSearchForm />
                </MovieSection>
            </ParallaxProvider>
        </MovieSectionContainer>
    )
}

const MovieSectionContainer = styled.div`
    max-width: 960px;
    margin: 0 auto;
`;

const MovieSection = styled.section<{section: Number}>`
    ${({section}) => {
        switch(section) {
            case 1: 
                return `
                    position: relative;
                    height: 400vh;
                `;
            case 2:
                return `
                    position: relative;
                    z-index: 2;
                    padding-bottom: 14rem;
                `;
        }
    }}

    ${({ theme }) => theme.media.tabletL`
        padding-right: 20px;
        padding-left: 20px;
    `}
`;

