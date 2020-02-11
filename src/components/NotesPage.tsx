import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { INoteModel, INotesModel } from '../reducers/notesReducers'
import AddNoteForm from './AddNoteForm'
import { NotesList } from './NotesList'
import { actionTypes } from '../actions'


import '../styles/styles.scss'


interface IState {
    notes: INotesModel
}

const NotesPage: React.FC = () => {
    const dispatch = useDispatch();
    const listOfNotes = useSelector<IState, INoteModel[]>((state: IState) => state.notes.list);

    const toggleHandler = (id: number) => {
        dispatch({ type: actionTypes.CHANGE_DONE_PROP, payload: id });
    }

    const deleteHandler = (id: number) => {
        const note = listOfNotes.find(note => note.id === id)!;
        const shouldDelete = confirm('Выбранная заметка «' + note.title + '» будет удалена');
        if (shouldDelete) {
            dispatch({ type: actionTypes.DELETE, payload: id });
        }
    }

    return <div className="container"><h4 className="align-center">
        Ваши заметки
        </h4>
        <AddNoteForm />
        <NotesList notes={listOfNotes} onToggle={toggleHandler} onDelete={deleteHandler} />
    </div>
}

export default NotesPage;