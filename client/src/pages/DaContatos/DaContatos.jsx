import { useState, useEffect } from 'react';
import axios from 'axios';

import './DaContatos.css';

function DaContatos() {
  
  return (
    <div className="DaContatos">
      <div className="caixaContatos">
        <div className="meiosContatos">
          <div className="nomeContatos">
            <h2>Nome:</h2>
            <form>
              <input type="text" name="name" placeholder="Digite seu nome" required />
            </form>
          </div>
          <div className="emailContatos">
            <h2>Email:</h2>
            <form>
              <input type="email" name="email" placeholder="exemplo@gmail.com" required />
            </form>
          </div>
          <div className="assuntoContatos">
            <h2>Assuntos:</h2>
            <form>
              <input type="tel" name="phone" placeholder="(DDD) 99999-9999" minLength="10" pattern="[ 0-9\(\)-]{10,16}$"/>
            </form>
          </div>
        </div>
        <div className="mensagemContatos">
          <h2>Mensagem:</h2>
          <form> 
            <textare aplaceholder="Digite a sua mensagem" requiredrows="10" />
          </form>
        </div>
      </div>
      <div className="cardContatos">
        <div className="barrinhaContatos"></div>
        <div className="tituloContatos">
          <h1>Contato</h1>
        </div>
        <div className="textoContatos">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida amet in neque pretium, ut id vestibulum tempus sagittis.</p>
        </div>
      </div>
    </div>
  );
}

export default DaContatos;
