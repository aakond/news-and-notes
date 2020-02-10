import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionTypes } from '../actions/actions';
import { INotesModel } from '../reducers/notesReducers'

import '../styles/styles.scss'

interface IState {
    notes: INotesModel
}

const NoteForm: React.FC = () => {
    const dispatch = useDispatch();

    const notes = useSelector<IState, INotesModel>((state: IState) => state.notes);

    let title: string;

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        title = event.target.value;
    };

    const enterPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            dispatch({ type: actionTypes.ADD, payload: title });
        }
    };

    return <div className="input-field margin-top-2">
        <input type="text" id="title" placeholder="Заметка" onKeyPress={enterPressHandler} onChange={changeHandler} />
        <label htmlFor="title" className="active">Добавить заметку</label>
        
    </div>
}

export default NoteForm