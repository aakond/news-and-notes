import React from 'react';
import { useSelector } from 'react-redux';
import { INoteModel, INotesModel } from '../reducers/notesReducers';

import '../styles/styles.scss'

interface NotesListProps {
    notes: INoteModel[]
    onToggle: (id: number) => void
    onDelete: (id: number) => void
}

/*interface IState {
    notes: INotesModel
}*/

export const NotesList: React.FC<NotesListProps> = ({ notes, onToggle, onDelete }) => {
    //const listOfNotes = useSelector<IState, INoteModel[]>((state: IState) => state.notes.list);    
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        console.log('note done changed: ' + event.target);
    }
    return <ul>
        {notes.map(note => {
            const classes = ['note'];
            if (note.done) {
                classes.push('done');
            }
            return <li className={classes.join(' ')} key={note.id}>
                <label>
                    <input type="checkbox" checked={note.done} onChange={onToggle.bind(null, note.id)}/>
                    <span>
                        {note.title}
                    </span>
                    <i className="material-icons red-text" onClick={() => onDelete(note.id)}>delete</i>
                </label>
            </li>
        }
        )
        }

    </ul>
}