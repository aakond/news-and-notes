import React from 'react';

const NewsHorizontalItem: React.FC = () => {
    return <div className="card horizontal">
    <div className="card-image">
      <img src="src\images\sample-1.jpg"/>
    </div>
    <div className="card-stacked">
      <div className="card-content">
        <p>I am a very simple card. I am good at containing small bits of information.</p>
      </div>
      <div className="card-action">
        <a href="#">This is a link</a>
      </div>
    </div>
  </div>
};

export default NewsHorizontalItem;