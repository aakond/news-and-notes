import React, { useState, useEffect } from 'react'
import { IState } from './NotesPage';
import { useSelector, useDispatch } from 'react-redux';
import { actionTypes } from '../actions';

interface SearchNotesProps {
    onSearch: (query: string) => void
}

const SearchNotesForm: React.FC<SearchNotesProps> = ({ onSearch }) => {
    const dispatch = useDispatch();
    const searchQuery = useSelector<IState, string>((state: IState) => state.notes.searchQuery);


    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {        
        dispatch({ type: actionTypes.UPDATE_SEARCH_QUERY, payload: event.target.value })                
    };
    
    const clearHandler = (event: React.MouseEvent) => {
        dispatch({ type: actionTypes.UPDATE_SEARCH_QUERY, payload: "" }) 
    }
    
    useEffect(() => {
        onSearch(searchQuery);        
    }, [searchQuery]);

    return <div className="input-field input-field__search margin-top-2">
            <i className="material-icons prefix">search</i>
            <input type="text" id="search" placeholder="Запрос" onChange={changeHandler} value={ searchQuery }/>
            <label htmlFor="search" className="active">Искать заметку</label>
            <i className="material-icons" onClick={clearHandler}>close</i>                    
        </div>
}

export default SearchNotesForm;