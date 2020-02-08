import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from  'react-router-dom';



import './styles/index.scss'

const App: React.FC = () => {
        return <>
                <Navbar />
                <BrowserRouter>
                        <Switch>
                                <Route exact path="/" children={()=><h2>Main</h2>} />
                                <Route path="/news" children={()=><h2>News</h2>} />
                                <Route exact path="/notes" children={()=><h2>Profile</h2>} />
                                <Route children={()=><h2>Not Found 404</h2>} />
                        </Switch>
                </BrowserRouter>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, fugiat ex? Ipsum sequi architecto harum, magni repellendus expedita eius nostrum! Maiores cupiditate error aspernatur officia omnis molestiae, atque dolorem nisi autem quisquam voluptas. Aliquid culpa dolorem tempore dolor, deserunt facere! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, suscipit. Quos ad nobis laudantium eum aliquam aut veritatis alias sed!</h2>
        </>
}

export default App;