import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { INoteModel, INotesPageModel } from '../reducers/notesReducers'
import AddNoteForm from './AddNoteForm'
import SearchNotesForm from './SearchNotesForm'
import FilterNotes from './FilterNotes'
import { NotesList } from './NotesList'
import { actionTypes } from '../actions'
import { INewsModel } from '../reducers/newsReducer'

import '../styles/styles.scss'

import $ from 'jquery';


export interface IState {
    notes: INotesPageModel,
    news: INewsModel
}

const NotesPage: React.FC = () => {

    const dispatch = useDispatch();

    const listOfNotes = useSelector<IState, INoteModel[]>((state: IState) => state.notes.filteredList);
    const searchQuery = useSelector<IState, string>((state: IState) => state.notes.searchQuery);

    const [notesForOutput, setNotesForOutput] = useState(listOfNotes);
    const [currentFilter, setCurrentFilter] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        setNotesForOutput(listOfNotes);
    }, [listOfNotes]);

    const toggleHandler = (id: number) => {
        dispatch({ type: actionTypes.CHANGE_DONE_PROP, payload: id });       
        
        if (typeof currentFilter !== 'undefined') {
            dispatch({ type: actionTypes.FILTER_NOTES, payload: currentFilter, meta: searchQuery });
        }
    }

    const deleteHandler = (id: number) => {
        const note = listOfNotes.find(note => note.id === id)!;
        const shouldDelete = confirm('Выбранная заметка «' + note.title + '» будет удалена');
        if (shouldDelete) {
            dispatch({ type: actionTypes.DELETE, payload: id });
        }
    }

    const searchHandler = (query: string) => {        
        dispatch({ type: actionTypes.UPDATE_SEARCH_QUERY, payload: query })
        dispatch({ type: actionTypes.FILTER_NOTES, payload: currentFilter, meta: query });
    }
    const enterHandler = (noteTitle: string) => {
        const newNote: INoteModel = { title: noteTitle, id: Date.now(), done: false };
        dispatch({ type: actionTypes.ADD, payload: newNote });
        dispatch({ type: actionTypes.UPDATE_SEARCH_QUERY, payload: "" })
        $('.collection .collection-item.active').removeClass('active');
        $('#default-filter').addClass('active');
    };

   const filterClickHandler = (newFilter: boolean | undefined, ) => {
        setCurrentFilter(newFilter);
        dispatch({ type: actionTypes.FILTER_NOTES, payload: newFilter, meta: searchQuery });
    }

    return <div className="row">
        <h4 className="align-center">
            Ваши заметки
                </h4>
        <div className="col s12 m4 l3">
            <SearchNotesForm onSearch={searchHandler} />
            <FilterNotes onAllClick={() => filterClickHandler(undefined)} onActiveClick={() => filterClickHandler(false)} onDoneClick={() => filterClickHandler(true)}/>
        </div>

        <div className="col s12 m8 l9">
            <AddNoteForm onEnterPress={enterHandler} />
            <NotesList notes={notesForOutput} onToggle={toggleHandler} onDelete={deleteHandler} />
        </div>

    </div>
}

export default NotesPage;