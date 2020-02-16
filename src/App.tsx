import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NewsPage, NotesPage, NotFoundPage, MainPage } from './components/pages/';
import Navbar from './components/widgets/Navbar';
import store from './store/store';
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
