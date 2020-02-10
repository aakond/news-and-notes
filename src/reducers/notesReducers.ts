import * as Types from 'Types';
import { actionTypes } from '../actions/actions';

export interface INotesModel {
  list: string[];
}

export const initialState: INotesModel = {
  list: ["Пример заметки 1", "Пример заметки 2"]
};

export const notesReducer = (state: INotesModel = initialState, action: Types.RootAction) => {
  switch (action.type) {
    case actionTypes.ADD: {
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    }
    case actionTypes.DELETE: {
      const oldList = [...state.list];
      oldList.splice(action.payload, 1);
      const newList = oldList;

      return {
        ...state,
        list: newList
      };
    }
    default:
      return state;
  }
};