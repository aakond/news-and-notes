import React, { useState, useEffect } from 'react'

interface SearchNotesProps {
    onSearch: (query: string) => void
}


const SearchNotesForm: React.FC<SearchNotesProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {        
        setQuery(event.target.value);                
    };   
    
    useEffect(() => {
        onSearch(query);        
    }, [query]);

    return <div className="input-field margin-top-2">
            <i className="material-icons prefix">search</i>
            <input type="text" id="search" placeholder="Запрос" onChange={changeHandler} value={ query }/>
            <label htmlFor="search" className="active">Искать заметку</label>        
        </div>
}

export default SearchNotesForm;