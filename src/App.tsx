import React from 'react';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import NewsPage from './components/NewsPage';
import NotesPage from './components/NotesPage';
import NotFoundPage from './components/NotFoundPage';
import { Provider } from 'react-redux';
import store from './store/store';


import { BrowserRouter, Route, Switch } from 'react-router-dom';



import './styles/styles.scss'

const App: React.FC = () => {
    return <Provider store={store}>
    <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/news" component={NewsPage} />
                <Route exact path="/notes" component={NotesPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    </Provider >
}

export default App;