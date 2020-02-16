export interface AddNoteProps {
	onEnterPress: (noteTitle: string) => void;
}

export interface FilterNotesProps {
	onActiveClick: () => void;
	onAllClick: () => void;
	onDoneClick: () => void;
}

export interface INewsItemProps {
	news: INewsModel;
}

export interface INewsModel {
	content: string;
	date: string;
	header: string;
	imageSrc1: string;
	imageSrc2: string;
}

export interface INoteModel {
	done: boolean;
	id: number;
	title: string;
}

export interface INotesPageModel {
	filteredList: INoteModel[];
	list: INoteModel[];
	searchQuery: string;
}

export interface IState {
	news: INewsModel;
	notes: INotesPageModel;
}

export interface NotesListProps {
	notes: INoteModel[];
	onDelete: (id: number) => void;
	onToggle: (id: number) => void;
}

export interface SearchNotesProps {
	onSearch: (query: string) => void;
}
