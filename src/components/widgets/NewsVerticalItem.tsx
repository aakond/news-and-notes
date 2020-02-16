import React from "react";
import { INewsItemProps } from "../../interfaces";
import "../../styles/styles.scss";

const NewsVerticalItem: React.FC<INewsItemProps> = ({ news }) => {
	return <div className="card">
		<div className="card-image">
			<img src={news.imageSrc1} />
		</div>
		<div className="card-content ">
			<span className="card-title">{news.header} </span>
			<p>{news.content}</p>
			<span className="card-date">{news.date}</span>
		</div>
		<div className="card-action">
			<a href="#">Читать далее</a>
		</div>
	</div>;
};

export default NewsVerticalItem;
