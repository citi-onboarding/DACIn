import { useState, useEffect } from 'react';
import axios from 'axios';

import './BoasVindas.css';
import send_icon from '../BoasVindas/assets/send_icon.svg'
import first_person from '../BoasVindas/assets/first_person.svg'
import second_person from '../BoasVindas/assets/second_person.svg'
import third_person from '../BoasVindas/assets/third_person.svg'
import fourth_person from '../BoasVindas/assets/fourth_person.svg'
import fifth_person from '../BoasVindas/assets/fifth_person.svg'

function BoasVindas() {
  return (
    <div className="boasVindas">
      <div className="introduction">
        <p className="welcome">BEM VINDOS AO DACIN - UFPE</p>
        <h1 className="title">Diretório Acadêmico do Centro de Informática</h1>
        <p className="description">Esta é a página oficial do Diretório Acadêmico, que tem como intuito mantê-los informados sobre nossas ações e outras informações úteis</p>
        <button className="statuteButton">
          <span>Nosso estatuto</span>
          <img src={send_icon} alt="send_icon"/>
        </button>
      </div>
      <div className="images">
        <img src={first_person} alt="first_person"/>
        <img src={second_person} alt="second_person"/>
        <img src={third_person} alt="third_person"/>
        <img src={fourth_person} alt="fourth_person"/>
        <img src={fifth_person} alt="fifth_person"/>
      </div>
    </div>
  );
}

export default BoasVindas;