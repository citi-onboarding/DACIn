import { useState, useEffect } from 'react';
import axios from 'axios';

import './BoasVindas.css';
import send_icon from '../assets/send_icon.svg'
import first_person from '../assets/first_person.svg'
import second_person from '../assets/second_person.svg'
import third_person from '../assets/third_person.svg'
import fourth_person from '../assets/fourth_person.svg'
import fifth_person from '../assets/fifth_person.svg'
import logo from '../assets/logoDA.svg'


function BoasVindas() {

  const [BoasVindasInfo, setBoasVindasInfo] = useState([]);

  const loadBoasVindasInfo = async () => {
    const res = await axios.get('http://localhost:3001/api/boasVindas');
    setBoasVindasInfo(res.data);
  };

  useEffect(() => {
    loadBoasVindasInfo();
  }, []);

  const[toggle, setToggle] = useState('')

  return (
    <div id="boasVindas">
      <header>
        <img src={logo} alt="logoDacin" className="Logo" width="178px" height="56px" />
        <nav className="menu">
          <input type="checkbox" id="checkbox-menu" checked={toggle}/>
          <div className="hamburguer" onClick={() => {
            if (toggle == 'active') {
              setToggle('')
            } else {
              setToggle('active')
            }
          }}>

            <label className="hamburguer-lines" htmlFor="checkbox-menu">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <div className="options">
            <a href="#boasVindas" className="navbar-op" onClick={() => setToggle('')}>Início</a>
            <a href="#SobreDA" className="navbar-op" onClick={() => setToggle('')}>Sobre o DA</a>
            <a href="#NossasAcoes" className="navbar-op" onClick={() => setToggle('')}>Nossas ações</a>
            <a href="/" className="navbar-op" onClick={() => setToggle('')}>Depoimentos</a>
            <a href="/" className="navbar-op" onClick={() => setToggle('')}>Contato</a>
          </div>
        </nav>
      </header>
      <div className="introduction">
        <p className="welcome">BEM VINDOS AO DACIN - UFPE</p>
        <h1 className="welcome-title">{BoasVindasInfo[0]?.title}</h1>
        <p className="welcome-description">{BoasVindasInfo[0]?.description}</p>
        <a href={BoasVindasInfo[0]?.link} target="_blank">
          <button className="statuteButton">
            <span>Nosso estatuto</span>
            <img src={send_icon} alt="send_icon" />
          </button>
        </a>
      </div>
      <div className="images">
        <img src={first_person} alt="first_person" />
        <img src={second_person} alt="second_person" />
        <img src={third_person} alt="third_person" />
        <img src={fourth_person} alt="fourth_person" />
        <img src={fifth_person} alt="fifth_person" />
      </div>
    </div>
  );
}

export default BoasVindas;