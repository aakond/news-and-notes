import React, { useState } from 'react';

import '../styles/styles.scss'

const NoteForm: React.FC = () => {
    const [title, setTitle] = useState<string>('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const enterPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            console.log(title);
            setTitle('');
        }
    };

    return <div className="input-field margin-top-2">
        <input type="text" id="title" placeholder="Заметка" onKeyPress={enterPressHandler} onChange={changeHandler} />
        <label htmlFor="title" className="active">Добавить заметку</label>
    </div>
}

export default NoteForm