import React, { useState, useEffect } from 'react'

import '../styles/styles.scss'

interface FilterNotesProps {
    onAllClick: () => void,
    onActiveClick: () => void,
    onDoneClick: () => void,
}

const FilterNotes: React.FC<FilterNotesProps> = ({ onAllClick, onActiveClick, onDoneClick }) => {
    const [query, setQuery] = useState('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const clearHandler = (event: React.MouseEvent) => {
        setQuery('');
    }

    const allClickHandler = () => { onAllClick() };
    const activeClickHandler = () => { onActiveClick() };
    const doneClickHandler = () => { onDoneClick() };

    useEffect(() => {
        // onSearch(query);        
    }, [query]);

    return <div className="collection filter">
        <a className="collection-item" onClick={allClickHandler}>Все заметки</a>
        <a className="collection-item" onClick={activeClickHandler}>Активные заметки</a>
        <a className="collection-item" onClick={doneClickHandler}>Завершённые заметки</a>
    </div>
}

export default FilterNotes;








