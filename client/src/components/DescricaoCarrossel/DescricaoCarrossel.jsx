import { useState, useEffect } from 'react';
import axios from 'axios';

import './DescricaoCarrossel.css';

function DescricaoCarrossel(props) {

  return (
    <div className="descricaoCarrossel">

      <div className="fotoDepoimentos">
        <img src={props.linkImage} alt="imagem depoimentos" className="img1"/>
      </div>
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