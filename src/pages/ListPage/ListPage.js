import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './ListPage.css';

const ListPage = () => {
    
    const {my_list}=useSelector(state=>state.mylist)
    const {state} = useLocation()

    return (
        <>
        <Header/>
        <div className="list-page">
            
            <h1 className="list-page__title">{state.title}</h1>
            <ul>
                {my_list.map((item) => {
                    return (
                        <li key={item.imdbID}>
                            <a href={`https://www.imdb.com/title/${item.imdbID}`} rel="noopener noreferrer" target="_blank">{item.Title} ({item.Year})</a>
                        </li>
                    );
                })}
            </ul>
        </div>
        </>
    );

}

export default ListPage;