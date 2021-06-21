import { useState, useEffect } from 'react';
import axios from 'axios';

import './DescricaoCarrossel.css';

function DescricaoCarrossel(props) {

  return (
    <div className="descricaoCarrossel">
      <div class="img1" style={{backgroundImage: `url(${props.linkImage})`}} />
      <div className="descrição">
        <p>{props.text}</p>
      </div>
      <div className="nome">
        <p>{props.nome}</p>
      </div>
    </div>
    

  );
}

export default DescricaoCarrossel;