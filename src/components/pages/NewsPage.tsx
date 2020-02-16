import React from 'react';
import { useSelector } from 'react-redux';
import { NewsHorizontalItem, NewsVerticalItem } from './../widgets';
import { INewsModel, IState } from '../../interfaces';
import '../../styles/styles.scss';


const NewsPage: React.FC = () => {
    const defaultNews = useSelector<IState, INewsModel>((state: IState) => state.news);

    return <div className="container">
        <h4 className="align-center">
            Новости
        </h4>
        <div className="row ">
            <div className="col s12">
                <NewsHorizontalItem news={defaultNews} />
            </div>
            <div className="row">
                <div className="col s12 m4 l4"><NewsVerticalItem news={defaultNews} /></div>
                <div className="col s12 m4 l4"><NewsVerticalItem news={defaultNews} /></div>
                <div className="col s12 m4 l4"><NewsVerticalItem news={defaultNews} /></div>
            </div>
            <div className="row">
                <div className="col s12 m6 l6"><NewsVerticalItem news={defaultNews} /></div>
                <div className="col s12 m6 l6"><NewsVerticalItem news={defaultNews} /></div>
            </div>
        </div>
    </div>
}

export default NewsPage;