import { useState, useEffect } from 'react';
import axios from 'axios';

import './DescricaoDA.css';

function DescricaoDA(props) {

  return (
    <div className="descricaoDA">
      <div className="PurpleSquareDA">
        <div style={{padding: props.squarePadding}} className="PurpleSquare">
          <img src={props.ImageDA} alt={props.ImageDADescription}/>
        </div>
      </div>
      <div className="ContentDA">
        <h1>{props.TitleDA}</h1>
        <div className="lineDA"></div>
        <p style={{width: props.WidthDA}}>{props.DescriptionDA}</p>
      </div>
    </div>
  );
}

export default DescricaoDA;