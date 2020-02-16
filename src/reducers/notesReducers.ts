import * as Types from 'Types';
import { actionTypes } from '../actions/actions';
import { INotesPageModel, INoteModel } from '../interfaces';


const defaultNotes: INoteModel[] = [{ title: "Пример заметки 1", id: 1, done: false }, { title: "Пример заметки 2", id: 2, done: false }];

export const initialState: INotesPageModel = {
  list: defaultNotes,
  filteredList: defaultNotes,
  searchQuery: ""
};

export const notesReducer = (state: INotesPageModel = initialState, action: Types.RootAction) => {
  switch (action.type) {
    case actionTypes.ADD: {
      const newList = [action.payload, ...state.list];
      return {
        ...state,
        list: newList,
        filteredList: newList
      };
    };
    case actionTypes.DELETE: {
      let list = [...state.list];
      const position = list.findIndex(note => note.id === action.payload)
      list.splice(position, 1);

      return {
        ...state,
        list: list,
        filteredList: list
      };
    };
    case actionTypes.CHANGE_DONE_PROP: {
      let list = [...state.list];
      const noteId = action.payload;
      const notePosition = list.findIndex(note => note.id === noteId)!;
      const changedNote: INoteModel = {
        title: list[notePosition].title,
        done: !list[notePosition].done,
        id: list[notePosition].id
      }
      list.splice(notePosition, 1, changedNote);

      return {
        ...state,
        list: list,
        filteredList: list
      };
    };
    case actionTypes.FILTER_NOTES: {
      const list = [...state.list];
      let filteredList: INoteModel[];
      if (action.payload === undefined) {
        filteredList = list;
      } else {
        filteredList = list.filter(note => note.done === action.payload);
      }
      if (action.meta !== "") {
        filteredList = filteredList.filter(note => {
          const currentNoteTitle = note.title.toLowerCase();
          const queryLC = action.meta.toLowerCase();
          return currentNoteTitle.includes(queryLC);
        });
      }
      return {
        ...state,
        list: list,
        filteredList: filteredList
      }
    };
    case actionTypes.UPDATE_SEARCH_QUERY: {
      const list = [...state.list];
      const filteredList = [...state.filteredList];
      return {
        ...state,
        list: list,
        filteredList: filteredList,
        searchQuery: action.payload
      }
    }
    default:
      return state;
  }
};