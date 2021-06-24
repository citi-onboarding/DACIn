import { useState, useEffect } from 'react';
import axios from 'axios';
import url from '../../apiURL'

import './DaContatos.css';

import boneco1 from '../DaContatos/assets/boneco1.png'
import boneco2 from '../DaContatos/assets/boneco2.png'

function DaContatos() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [mensagem, setMensagem] = useState('')

  const data ={
    name, email, subject, mensagem
  }
  

  const sendMaile = async () => {

    try {
        const db = await axios.post(`${url.url}/api/Nodemailer`, {
            "name": name,
            "email": email,
            "subject": subject,
            "mensagem": mensagem
        })

        if (db.status === 200) {
            console.log('Mensagem enviada!');
            alert('Mensagem enviada!')

            setName('')
            setEmail('')
            setSubject('')
            setMensagem('')
        }
    } catch (error) {
        console.log('Erro ao enviar')
        alert(`Erro ao enviar${error}`)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMaile();
  };

  

  return (
    <div id="DaContatos">
      <div className="bonecosContatos">
        <div className="boneco2"> <img src={boneco2} alt="boneco2"/> </div>
        <div className="boneco1"> <img src={boneco1} alt="boneco1"/> </div>
      </div>  

      
      <div className="caixaContatos">
        <div className="meiosContatos">

          <form  onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="Nome" placeholder="Insira seu nome" className="input-clear" required value={name} onChange={(e) => setName(e.target.value)} />
           
            <label htmlFor="email">Email:</label>
            <input type="email" name="Email" placeholder="Insira seu email" className="input-clear" required value={email} onChange={(e) => setEmail(e.target.value)} />
            
            <label htmlFor="subject">Assuntos:</label>
            <input id="inputAssunto" type="text" name="subject" className="input-clear" placeholder="Insira um assunto" value={subject} required onChange={(e) => setSubject(e.target.value)} />
            
          </form>
          
        </div>

        <div className="mensagemContatos">
          
          <form onSubmit={(event) => handleSubmit(event)}> 
            <label htmlFor="message">Mensagem:</label>
            <textarea rows="10" placeholder="Digite a sua mensagem" className="input-clear" requiredrows="10" value={mensagem} required onChange={(e) => setMensagem(e.target.value)} />

            <button type="submit" className="ButtonContatos"> 
                <span>Enviar</span>
            </button>
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
