import React from 'react'
import NewsVerticalItem from './NewsVerticalItem';

import '../styles/styles.scss'
import NewsHorizontalItem from './NewsHorizontalItem';

const NewsPage: React.FC = () => {
    return <div className="container">
        <h4 className="align-center">
            Новости
        </h4>
        <div className="row ">
            <div className="col s12 m8 l8 ">
                <NewsVerticalItem />
                <NewsHorizontalItem />
            </div>
            <div className="col s12 m4 l4 col-container">
                <NewsVerticalItem />
                <NewsVerticalItem />
            </div>
        </div>
        <div className="row">
            <div className="col s12 m4 l4"><NewsVerticalItem /></div>
            <div className="col s12 m4 l4"><NewsVerticalItem /></div>
            <div className="col s12 m4 l4"><NewsVerticalItem /></div>
        </div>
        <div className="row">
            <div className="col s12 m6 l6"><NewsVerticalItem /></div>
            <div className="col s12 m6 l6"><NewsVerticalItem /></div>
        </div>        
    </div>
}

export default NewsPage;