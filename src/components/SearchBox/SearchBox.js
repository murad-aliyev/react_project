import React from 'react';
import { useState } from 'react';
import './SearchBox.css';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../store/actions';

const SearchBox = ({setInfo}) => {

    const dispatch = useDispatch()

    const [state, setState] = useState({
        searchLine: '',
    })

    const { t } = useTranslation()


    const searchLineChangeHandler = (e) => {
        setState({ ...state, searchLine: e.target.value });
    }
    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(getMovies(state.searchLine));
    }

    const { searchLine } = state;

    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                {t("searchBoxLabel")}
                    <input
                        value={searchLine}
                        type="text"
                        className="search-box__form-input"
                        placeholder={t("searchBoxPlaceHolder")}
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!searchLine}
                >
                    {t("searchButton")}
                </button>
            </form>
        </div>
    );

}

export default SearchBox;