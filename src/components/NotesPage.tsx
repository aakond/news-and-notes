import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { INoteModel, INotesModel } from '../reducers/notesReducers'
import AddNoteForm from './AddNoteForm'
import SearchNotesForm from './SearchNotesForm'
import FilterNotes from './FilterNotes'
import { NotesList } from './NotesList'
import { actionTypes } from '../actions'
import { INewsModel } from '../reducers/newsReducer'

import '../styles/styles.scss'



export interface IState {
    notes: INotesModel,
    news: INewsModel
}

const NotesPage: React.FC = () => {
    const dispatch = useDispatch();

    const listOfNotes = useSelector<IState, INoteModel[]>((state: IState) => state.notes.list);
    const [notesForOutput, setNotesForOutput] = useState(listOfNotes);

    useEffect(() => {
        setNotesForOutput(listOfNotes);
    }, [listOfNotes]);
    
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
            setNotesForOutput(notesForOutput.filter(note => {
                const currentNoteTitle = note.title.toLowerCase();
                const filter = query.toLowerCase();
                return currentNoteTitle.includes(filter);
            }));
        } else {
            setNotesForOutput(notesForOutput);
        }
    }
    const enterHandler = (noteTitle: string) => {
        const newNote: INoteModel = { title: noteTitle, id: Date.now(), done: false };
        dispatch({ type: actionTypes.ADD, payload: newNote});
    };

    const allClickHandler = () => {
        setNotesForOutput(listOfNotes);
    }

    const activeClickHandler = () => {
        setNotesForOutput(listOfNotes.filter(note => !note.done));
    }

    const doneClickHandler = () => {
        setNotesForOutput(listOfNotes.filter(note => note.done));        
    }

    return <div className="row">
        <h4 className="align-center">
            Ваши заметки
                </h4>
        <div className="col s12 m4 l3">
            <SearchNotesForm onSearch={searchHandler} />
            <FilterNotes onAllClick={allClickHandler} onActiveClick={activeClickHandler} onDoneClick={doneClickHandler}/>
        </div>

        <div className="col s12 m8 l9">
            <AddNoteForm onEnterPress={enterHandler} />
            <NotesList notes={notesForOutput} onToggle={toggleHandler} onDelete={deleteHandler} />
        </div>

    </div>
}

export default NotesPage;