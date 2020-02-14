import React, { useState, useEffect } from 'react'
import $ from 'jquery';

import '../styles/styles.scss'

interface FilterNotesProps {
    onAllClick: () => void,
    onActiveClick: () => void,
    onDoneClick: () => void,
}

const FilterNotes: React.FC<FilterNotesProps> = ({ onAllClick, onActiveClick, onDoneClick }) => {
    const allClickHandler = () => { onAllClick() };
    const activeClickHandler = () => { onActiveClick() };
    const doneClickHandler = () => { onDoneClick() };

    useEffect(() => {
        $('.collection').on('click', '.collection-item', function () {
            $('.collection .collection-item.active').removeClass('active');
            $(this).addClass('active');
        });
    }, [])

    return <div className="collection filter" id="filter">
        <a className="collection-item active" id="default-filter" onClick={allClickHandler}>Все заметки</a>
        <a className="collection-item" onClick={activeClickHandler}>Активные заметки</a>
        <a className="collection-item" onClick={doneClickHandler}>Завершённые заметки</a>
    </div>
}

export default FilterNotes;








