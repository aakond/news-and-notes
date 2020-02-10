import { action } from 'typesafe-actions';

export enum actionTypes {
    ADD = "ADD",
    DELETE = "DELETE"
}

export const noteActions = {
    add: (item: string) => action(actionTypes.ADD, item),
    delete: (id: number) => action(actionTypes.DELETE, id)
}

