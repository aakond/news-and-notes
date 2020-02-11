import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionTypes } from '../actions/actions';

import '../styles/styles.scss'

const NoteForm: React.FC = () => {
    const dispatch = useDispatch();
    const [note, setNote] = useState('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    };

    const enterPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && note.length > 0) {
            dispatch({ type: actionTypes.ADD, payload: { title: note, id: Date.now(), done: false }});
            console.log(note);
            setNote('');
        }
    };

    return <div className="input-field margin-top-2">
        <input type="text" id="title" placeholder="Заметка" onKeyPress={enterPressHandler} onChange={changeHandler} value={note} />
        <label htmlFor="title" className="active">Добавить заметку</label>
        
    </div>
}

export default NoteForm