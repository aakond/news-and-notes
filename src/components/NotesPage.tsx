import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { INoteModel, INotesModel } from '../reducers/notesReducers'
import AddNoteForm from './AddNoteForm'
import SearchNotesForm from './SearchNotesForm'
import { NotesList } from './NotesList'
import { actionTypes } from '../actions'


import '../styles/styles.scss'


interface IState {
    notes: INotesModel
}

const NotesPage: React.FC = () => {
    const dispatch = useDispatch();
    const listOfNotes = useSelector<IState, INoteModel[]>((state: IState) => state.notes.list);    
    const [notesForOutput, setNotesForOutput] = useState(listOfNotes); 

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

    const searchHandler = (query: string) => {
        if (query !== "") {
            setNotesForOutput(listOfNotes.filter(note => {
                const currentNoteTitle = note.title.toLowerCase();
                const filter = query.toLowerCase();
                return currentNoteTitle.includes(filter);
            }));
        } else {
            setNotesForOutput(listOfNotes);
        }
    }

    return <div className="row">
        <h4 className="align-center">
            Ваши заметки
                </h4>
        <div className="col s12 m4 l3">
            <SearchNotesForm onSearch={searchHandler} />
        </div>

        <div className="col s12 m8 l9">
            <AddNoteForm />
            <NotesList notes={notesForOutput} onToggle={toggleHandler} onDelete={deleteHandler} />
        </div>

    </div>





}

export default NotesPage;