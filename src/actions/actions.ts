import { action } from 'typesafe-actions';

import { INoteModel } from '../reducers/notesReducers'

export enum actionTypes {
    ADD = "ADD",
    CHANGE_DONE_PROP = "CHANGE_DONE_PROP",
    DELETE = "DELETE"
    
}

export const noteActions = {
    add: (item: INoteModel) => action(actionTypes.ADD, item),
    changeDonePror: (id: number) => action(actionTypes.CHANGE_DONE_PROP, id),
    delete: (id: number) => action(actionTypes.DELETE, id)
}

