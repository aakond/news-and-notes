import React from 'react';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import NewsPage from './components/NewsPage';
import NotesPage from './components/NotesPage';

import { BrowserRouter, Route, Switch } from 'react-router-dom';



import './styles/index.scss'

const App: React.FC = () => {
    return <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/news" component={NewsPage} />
            <Route exact path="/notes" component={NotesPage} />
            <Route children={() => <h2>Not Found 404</h2>} />
        </Switch>
    </BrowserRouter>
}

export default App;