import { useState, useEffect } from 'react';
import axios from 'axios';

import './DacinFooter.css';
import logoDA from "../assets/logoDA.svg"
import citizinho from "../assets/citizinho.png"

function DacinFooter() {
  return (
    <div className="Footer">
        <div className="contatos">
            <div className="endereço">
                <div className="tituloEndereço">
                    <h1>Endereço</h1>
                </div>
                <div className="barrinha2"></div>
                <div className="descriçãoEndereço">
                    <p className="paragrafo" >Av. Jorn. Aníbal Fernandes,<br></br>
                        s/n - Cidade Universitária,<br></br>
                        Recife - PE, 50740-560<br></br>
                        CIn - Centro de Informática<br></br>
                        - UFPE</p><br></br>
                </div>
            </div>
            <div className="contato2" >  
                <div className="telefone">
                    <div className="tituloNumero">
                        <h1>Telefone</h1>
                    </div>
                    <div className="barrinha2">
                        
                    </div>
                    <div className="descriçãoNumero">
                        <p className="paragrafo">(81) xxxxx - xxxx</p>
                    </div>
                </div>
                <div className="email">
                    <div className="tituloEmail">
                        <h1>Email</h1>
                    </div>
                    <div className="barrinha2">
                        
                    </div>
                    <div className="descriçãoEmail">
                        <p className="paragrafo" >example@email.com</p>
                    </div>      
                </div>
            </div>
        </div>
        <div className="informações">
            <div className="logo">
                <img src={logoDA}></img>
            </div>
            <div className ="mensagemCiti">
                <div className="mensagem">
                    <p className="paragrafo" >Made with &lt;/&gt; and &#10084; by </p>
                </div>
                <div className="citizinho">
                    <img src={citizinho}></img>
                </div>  
                 
            </div>
        </div>
    </div>
  );
}

export default DacinFooter;
