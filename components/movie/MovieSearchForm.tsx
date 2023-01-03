import React, { useEffect, useState } from "react";
import { asyncMoviesActions } from "store/modules/movie/reducer";
import { useDispatch, useSelector } from "react-redux";
import { State } from "store/modules/rootReducer";
import styled from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MovieResultComponent from "./MovieResultComponent";




const SearchInputForm = () => {
    const dispatch = useDispatch();

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const day = today.getDate()-1;
    const todayDate = year + (("00"+month.toString()).slice(-2)) + (("00"+day.toString()).slice(-2));
    const [searchVal, setSearchVal] = useState<string>(todayDate);

    useEffect(() => {
        dispatch(asyncMoviesActions.request(todayDate));
    },[dispatch, todayDate])

    const sendQuery = () => {
		dispatch(asyncMoviesActions.request(searchVal));
	}

	const searchOnChange = (e) => {
        const result = e.target.value.replace(/\D/g, '');
        
		setSearchVal(result);
	}

    return (
        <SearchFlex>
            <SearchInput 
                onChange={searchOnChange} 
                value={searchVal} 
                maxLength={8} 
            />
            <SearchButton onClick={sendQuery}><FontAwesomeIcon icon={faMagnifyingGlass} /></SearchButton>
        </SearchFlex>
    );
};

const SearchInputMemo = React.memo(SearchInputForm);


export default function MovieSearchForm() {

    const movies_data = useSelector((state: State) => state.movies);
    const movies_success = useSelector((state: State) => state.movies.data);
    const movies_loading = useSelector((state: State) => state.movies.loading);
    const movies_failure = useSelector((state: State) => state.movies.error)

    return(
        <SearchContents>
            <SearchFormContaniner>
                <SearchInputMemo />
            </SearchFormContaniner>
            <SearchResultContainer>
                <MovieResultComponent
                    data={movies_data}
                    success={movies_success}
                    loading={movies_loading}
                    failure={movies_failure}
                />
            </SearchResultContainer>
        </SearchContents>
    )
}


const SearchContents = styled.div`
    max-width: 700px;
    margin: 0 auto;
    background-color: #fff;
    min-height: 50vh;
    border-radius: 5rem;
    padding: 4rem;
    box-shadow: -20px 30px 50px 0 rgb(0 0 0 / 10%);
}
`;

const SearchFormContaniner = styled.div`
    padding-bottom: 5rem;
    text-align: center;
`;

const SearchFlex = styled.div`
    display: inline-block;
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;
    width: 80%;
`;

const SearchInput = styled.input`
    display: inline-block;
    width: 100%;
    height: 6rem;
    padding: 0 3rem;
    border-radius: 5rem;
    border: 1px solid #ccc;
    font-size: 2rem;
    color: #777;
    background-color: #fff;
`;

const SearchButton = styled.button`
    display: inline-block;
    height: 60px;
    width: 60px;
    text-align: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);

    > svg {
        width: 20px;
        height: 20px;
    }
`;

const SearchResultContainer =  styled.div`
    position: relative;
`;