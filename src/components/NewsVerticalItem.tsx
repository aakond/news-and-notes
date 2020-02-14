import React from "react";

import '../styles/styles.scss'

const NewsVerticalItem: React.FC = () => {
    return <div className="card">

        <div className="card-image">
          <img src="src\images\sample-1.jpg"/>
          <span className="card-title">01/10/2020</span>
        </div>
        <div className="card-content ">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
};

export default NewsVerticalItem;
