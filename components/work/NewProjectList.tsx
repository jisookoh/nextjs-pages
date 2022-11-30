import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

export default function NewProjectList({newList}) {

    const listData = [...newList];

    return(
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >   
                {listData?.map((v) => (
                    <SwiperSlide key={v.title}>
                        <SlideItems background={v.webImage}>
                            <Link href={v.link}>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </Link>
                        </SlideItems>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}


const SlideItems = styled.div<{background:String}>`
    position: relative;
    background-image : ${({background}) => background ? `url("${background}")` : ""};
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;

    &::after {
        content: '';
        position: absolute;
        background-color: rgba(0,0,0,0.4);
        backdrop-filter: blur(4px);
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    & > a {
        display: block;
        height: 500px;
        padding: 40px;
        position: relative;
        z-index: 2;

        > * {
            color: #fff;
        }

        > h3 {
            font-size: 30px;
        }

        > p {
            font-size: 16px;
        }
    }
`;
// const ProjectList = styled.div`
//     display: flex;
//     flex-wrap: wrap;
// `;

// const ProjectListItem = styled.li`
//     position: relative;
//     width: 49%;

//     &:not(:nth-child(2n)) {
//         margin-right: 2%;
//     }
// `;