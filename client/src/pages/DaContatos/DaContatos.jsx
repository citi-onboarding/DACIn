import { useState, useEffect } from 'react';
import axios from 'axios';

import './DaContatos.css';

import boneco1 from '../DaContatos/assets/boneco1.png'
import boneco2 from '../DaContatos/assets/boneco2.png'

function DaContatos() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [assunto, setAssunto] = useState('')
  const [mensagem, setMensagem] = useState('')

  const data ={
    name, email, assunto, mensagem
  }
  

  const sendMaile = async () => {

    try {
        const db = await axios.post('http://localhost:3001/api/Nodemailer', {
            "name": name,
            "email": email,
            "assunto": assunto,
            "mensagem": mensagem
        })

        if (db.status === 200) {
            console.log('Mensagem enviada!');
            alert('Mensagem enviada!')

            setName('')
            setEmail('')
            setAssunto('')
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
    <div className="DaContatos">
      <div className="bonecosContatos">
        <div className="boneco2"> <img src={boneco2} alt="boneco2"/> </div>
        <div className="boneco1"> <img src={boneco1} alt="boneco1"/> </div>
      </div>  

      
      <div className="caixaContatos">
        <div className="meiosContatos">

          <form  onSubmit={(event) => handleSubmit(event)}>
            <label>Nome:</label>
            <input type="text" name="Nome" placeholder="Insira seu nome" required onChange={(e) => setName(e.target.value)} />
           
            <label>Email:</label>
            <input type="email" name="Email" placeholder="Insira seu email" required onChange={(e) => setEmail(e.target.value)} />
            
            <label>Assuntos:</label>
            <input id="inputAssunto" type="text" name="Assunto" placeholder="Insira um assunto" required onChange={(e) => setAssunto(e.target.value)} />
            
          </form>
          
        </div>

        <div className="mensagemContatos">
          
          <form onSubmit={(event) => handleSubmit(event)}> 
            <label>Mensagem:</label>
            <textarea rows="10" placeholder="Digite a sua mensagem" requiredrows="10" required onChange={(e) => setMensagem(e.target.value)} />

            <button type="sumit"  > Enviar </button>
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
