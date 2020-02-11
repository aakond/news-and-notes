import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { INoteModel, INotesModel } from '../reducers/notesReducers'
import NoteForm from './NoteForm'
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

    }

    return <div className="container"><h4 className="align-center">
        Ваши заметки
        </h4>
        <NoteForm/>
        <NotesList notes={listOfNotes} onToggle={toggleHandler} onDelete={deleteHandler}/>
        </div>
}

export default NotesPage;