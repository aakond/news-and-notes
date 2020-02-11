import * as Types from 'Types';
import { actionTypes } from '../actions/actions';

export interface INoteModel {
  title: string,
  id: number,
  done: boolean
}

export interface INotesModel {
  list: INoteModel[];
}

export const initialState: INotesModel = {
  //list: []
  list: [{ title: "Пример заметки 1", id: 1, done: false}, { title: "Пример заметки 2", id: 2, done: false}]
};

export const notesReducer = (state: INotesModel = initialState, action: Types.RootAction) => {
  switch (action.type) {
    case actionTypes.ADD: {
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    };
    case actionTypes.DELETE: {
      let list = [...state.list];
      const position = list.findIndex(note => note.id === action.payload)
      list.splice(position, 1);

      return {
        ...state,
        list: list
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
   
     
      /*list[notePosition] = {
        title: note.title,
        done: !note.done,
        id: note.id
      }*/

      list.splice(notePosition, 1, changedNote);

      return {
        ...state,
        list: list
      };
    }
    default:
      return state;
  }
};