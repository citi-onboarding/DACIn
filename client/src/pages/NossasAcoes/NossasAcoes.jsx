import { useState, useEffect } from 'react';
import axios from 'axios';

import './NossasAcoes.css';
import send_icon_purple from '../assets/send_icon_purple.svg'

function NossasAcoes() {

  const [NossasAcoesDescription, setNossasAcoesDescription] = useState([]);
  const [NossasAcoesInfo, setNossasAcoesInfo] = useState([]);

  const loadNossasAcoesDescription = async () => {
    const res = await axios.get('http://localhost:3001/api/NossasAcoes');
    setNossasAcoesDescription(res.data.dataNossasAcoes);
  };

  const loadNossasAcoesInfo = async () => {
    const res = await axios.get('http://localhost:3001/api/NossasAcoes');
    setNossasAcoesInfo(res.data.dataAcoesArea);
  };

  useEffect(() => {
    loadNossasAcoesInfo();
    loadNossasAcoesDescription();
  }, []);


  return (
    <div id="NossasAcoes">
      <div className="CardPosition">
        <div className="CardAcoes">
          <div className="CardLine"></div>
          <h1>{NossasAcoesDescription[0]?.title}</h1>
          <p>{NossasAcoesDescription[0]?.text}</p>
        </div>
      </div>
        <div className="NossasAcoesInfo">
          <div className="Info1">
            <img src={NossasAcoesInfo[0]?.image.secure_url} alt="picture_1" />
            <div className="AcoesContent1">
              <h1>{NossasAcoesInfo[0]?.text}</h1>
              <div className="NossasAcoesLine"></div>
              <p>{NossasAcoesInfo[0]?.description}</p>
            </div>
          </div>

          <div className="Info2">
            <img src={NossasAcoesInfo[1]?.image.secure_url} alt="picture_2" />
            <div className="AcoesContent2">
              <h1>{NossasAcoesInfo[1]?.text}</h1>
              <div className="NossasAcoesLine"></div>
              <p>{NossasAcoesInfo[1]?.description}</p>
            </div>
          </div>

          <div className="Info3">
            <img src={NossasAcoesInfo[2]?.image.secure_url} alt="picture_3" />
            <div className="AcoesContent3">
              <h1>{NossasAcoesInfo[2]?.text}</h1>
              <div className="NossasAcoesLine"></div>
              <p>{NossasAcoesInfo[2]?.description}</p>
            </div>
          </div>

          <div className="Info4">
            <img src={NossasAcoesInfo[3]?.image.secure_url} alt="picture_4" />
            <div className="AcoesContent4">
              <h1>{NossasAcoesInfo[3]?.text}</h1>
              <div className="NossasAcoesLine"></div>
              <p>{NossasAcoesInfo[3]?.description}</p>
            </div>
          </div>
        </div>

        <div className="ButtonAcoes">
          <a href={NossasAcoesDescription[0]?.link} target="_blank">
            <button className="BlogButton">
              <span>Acesse nosso blog</span>
              <img src={send_icon_purple} alt="send_icon_purple" />
            </button>
          </a>
        </div>
    </div>
  );
}

export default NossasAcoes;