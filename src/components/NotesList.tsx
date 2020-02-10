import React from 'react'

import '../styles/styles.scss'

interface NotesListProps {
    notes: any[]
}

export const NotesList: React.FC<NotesListProps> = ({ notes }) => {
    return <ul>
        {notes.map(item => {
            return <li className="note">
                <label>
                    <input type="checkbox" />
                    <span></span>
                    <i className="material-icons red-text">delete</i>
                </label>
            </li>
        }
        )
        }

    </ul>
}