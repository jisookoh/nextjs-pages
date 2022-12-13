import React from "react";
import styled from "styled-components";

export default function CharacterContainer() {
    return (
        <>
            <ChracterisicList>
                <ChracterisicListItem>
                    <div>
                        <h5>기간 : </h5>
                        <p>&nbsp;2021.06.07 ~ 2022.08.31</p>
                    </div>
                    <div>
                        <h5>직무 : </h5>
                        <p>&nbsp;퍼블리셔</p>
                    </div>
                    <div>
                        <h5>회사명 : </h5>
                        <p>&nbsp;아솜<strong>(웹 에이전시)</strong></p>
                    </div>
                    <div>
                        <h5>퇴사사유 : </h5>
                        <p>&nbsp;직무변경</p>
                    </div>
                </ChracterisicListItem>
                <ChracterisicListItem>
                    <div>
                        <h5>기간 : </h5>
                        <p>&nbsp;2022.08.01 ~ 2022.10.21</p>
                    </div>
                    <div>
                        <h5>직무 : </h5>
                        <p>&nbsp;프론트엔드</p>
                    </div>
                    <div>
                        <h5>회사명 : </h5>
                        <p>&nbsp;AI Spera<strong>(보안)</strong></p>
                    </div>
                    <div>
                        <h5>퇴사사유 : </h5>
                        <p>&nbsp;개인사유</p>
                    </div>
                </ChracterisicListItem>
            </ChracterisicList>
        </>
    )
}

const ChracterisicList = styled.ol`
    display: flex;
    flex-wrap: wrap;
`;

const ChracterisicListItem = styled.li`
    flex: 1 0 0;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px 30px;
    background-color: #fff;
    // box-shadow: 0 20px 30px 0 rgba(0,0,0,0.1);

    :not(:last-child) {
        margin-right: 3%;
    }

    > div {
        display : flex;
        align-items: center;

        &:not(:last-child) {
            margin-bottom: 1rem;
        }
    }

    h5 {
        font-size: 1.8rem;
    }

    p {
        font-size: 1.8rem;
    }

    ${({ theme }) => theme.media.tablet`
        flex: none;
        width: 100%;

        :not(:last-child) {
            margin-right: 0;
            margin-bottom: 20px;
        }
    `}
`;