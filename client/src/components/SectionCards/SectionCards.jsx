import { useState, useEffect } from 'react';
import axios from 'axios';

import './SectionCards.css';

function SectionCards(props) {
  return (
    <div className={`sectionCards-${props.complement}`}>
        <div className="content">
          <div className="line"></div>
          <h1 className="title">{props.title}</h1>
          <p className="description">{props.description}</p>
        </div>
    </div>
  );
}

export default SectionCards;
