import React from 'react';
import './MovieItem.css';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import { addMovieToList } from '../../store/actions';


const MovieItem =(props)=> {
    const {my_list} = useSelector(state=>state.mylist) 
    const { t } = useTranslation();
        const { Title, Year, Poster } = props;
        const dispatch = useDispatch()
        const addToList = ()=>{
            dispatch(addMovieToList(props))
           
        }
        const isTrue = my_list.some((item)=>{
            return item.imdbID===props.imdbID
        })
         
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button disabled={isTrue} onClick={addToList} type="button" className="movie-item__add-button">{t("addList")}</button>
                </div>
            </article>
        );
    
}
 
export default MovieItem;