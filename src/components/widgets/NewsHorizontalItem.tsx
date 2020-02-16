import React from "react";
import { INewsItemProps } from "../../interfaces";
import "../../styles/styles.scss";

const NewsHorizontalItem: React.FC<INewsItemProps> = ({ news }) => {
	return <div className="card horizontal">
		<div className="card-image">
			<img src={news.imageSrc2} />
		</div>
		<div className="card-stacked">
			<div className="card-content">
				<span className="card-title">{news.header}</span>
				<p>{news.content} {news.content} {news.content}</p>
				<span className="card-date">{news.date}</span>
			</div>
			<div className="card-action">
				<a href="#">Читать далее</a>
			</div>
		</div>
	</div>;
};

export default NewsHorizontalItem;