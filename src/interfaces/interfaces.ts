export interface AddNoteProps {
    onEnterPress: (noteTitle: string) => void
}

export interface FilterNotesProps {
    onAllClick: () => void,
    onActiveClick: () => void,
    onDoneClick: () => void,
}

export interface INewsItemProps {
    news: INewsModel
}

export interface INewsModel {
    header: string,
    content: string,
    date: string,
    imageSrc1: string,
    imageSrc2: string,
}

export interface INoteModel {
    title: string,
    id: number,
    done: boolean
}

export interface INotesPageModel {
    list: INoteModel[];
    filteredList: INoteModel[];
    searchQuery: string;
}

export interface IState {
    notes: INotesPageModel,
    news: INewsModel
}

export interface NotesListProps {
    notes: INoteModel[]
    onToggle: (id: number) => void
    onDelete: (id: number) => void
}

export interface SearchNotesProps {
    onSearch: (query: string) => void
}
