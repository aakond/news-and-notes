import React from 'react'
import NewsItem from './NewsItem';

const NewsPage: React.FC = () => {
    return <div >
        <h4 className="align-center">
            Новости
        </h4>
        <div className="row">
            <div className="col s12 m4 l2"><NewsItem /></div>
            <div className="col s12 m4 l8"><NewsItem /></div>
            <div className="col s12 m4 l2"><NewsItem /></div>
            <div className="col s12"><NewsItem /></div>
        </div>
        <div className="row">
            <div className="col s12 m6 l3"><NewsItem /></div>
            <div className="col s12 m6 l3"><NewsItem /></div>
            <div className="col s12 m6 l3"><NewsItem /></div>
            <div className="col s12 m6 l3"><NewsItem /></div>
        </div>
    </div>
}

export default NewsPage;