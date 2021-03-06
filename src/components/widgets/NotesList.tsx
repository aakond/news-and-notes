import React from "react";
import { NotesListProps } from "../../interfaces";
import "../../styles/styles.scss";

const NotesList: React.FC<NotesListProps> = ({ notes, onToggle, onDelete }) => {
	const deleteHandler = (event: React.MouseEvent, id: number) => {
		event.preventDefault();
		onDelete(id);
	};

	if (notes.length === 0) {
		return <p className="align-center">Пусто! Заметок нет</p>;
	}

	return <ul>
		{notes.map(note => {
			const classes = ["note"];
			if (note.done) {
				classes.push("done");
			}
			return <li className={classes.join(" ")} key={note.id}>
				<label>
					<input type="checkbox" checked={note.done} onChange={onToggle.bind(null, note.id)} />
					<span>
						{note.title}
					</span>
					<i className="material-icons red-text" onClick={event => deleteHandler(event, note.id)}>delete</i>
				</label>
			</li>;
		})
		}
	</ul>;
};

export default NotesList;