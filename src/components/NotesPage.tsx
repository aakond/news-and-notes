import React from 'react'
import NoteForm from './NoteForm'

import '../styles/styles.scss'

const NotesPage: React.FC = () => {
    return <div className="container"><h4 className="align-center">
        Ваши заметки
        </h4>
        <NoteForm/></div>

}

export default NotesPage;