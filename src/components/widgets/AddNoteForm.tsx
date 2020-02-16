import React, { useState, useEffect } from 'react';
import { AddNoteProps } from '../../interfaces';
import '../../styles/styles.scss';


const AddNoteForm: React.FC<AddNoteProps> = ( { onEnterPress } ) => {
    const [note, setNote] = useState('');    

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    };
    
    const enterPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && note.length > 0) {
            onEnterPress(note);
            setNote('');
        }
    };

    useEffect(() => {
    }, [note]);

    return <div className="input-field margin-top-2">
        <input type="text" id="title" placeholder="Новая заметка" onKeyPress={enterPressHandler} onChange={changeHandler} value={note} />
        <label htmlFor="title" className="active">Добавить заметку</label>        
    </div>
}

export default AddNoteForm