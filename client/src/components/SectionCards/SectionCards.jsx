import { useState, useEffect } from 'react';
import axios from 'axios';

import './SectionCards.css';

function SectionCards(props) {

  return (
    <div style={{backgroundImage: props.bgcolor, padding: props.padding}} className="sectionCards">
        <div style={{alignItems: props.align, textAlign: props.textalign}} className="content">
          <div className="line"></div>
          <h1 className="title">{props.title}</h1>
          <p className="description">{props.description}</p>
        </div>
    </div>
  );
}

export default SectionCards;
