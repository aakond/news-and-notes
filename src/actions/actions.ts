import { action } from 'typesafe-actions';

import { INoteModel } from '../reducers/notesReducers'

export enum actionTypes {
    ADD = "ADD",
    CHANGE_DONE_PROP = "CHANGE_DONE_PROP",
    DELETE = "DELETE",
    FILTER_NOTES = "FILTER_NOTES",
    UPDATE_SEARCH_QUERY = "UPDATE_SEARCH_QUERY"
}

export const noteActions = {
    add: (item: INoteModel) => action(actionTypes.ADD, item),
    changeDonePror: (id: number) => action(actionTypes.CHANGE_DONE_PROP, id),
    delete: (id: number) => action(actionTypes.DELETE, id),
    filterNotes: (done: boolean, searchQuery: string) => action(actionTypes.FILTER_NOTES, done, searchQuery),
    updateSearchQuery: (newQuery: string) => action(actionTypes.UPDATE_SEARCH_QUERY, newQuery)

}

