const keystone = require("keystone")
const doenv = require('dotenv');
const mailServer = require('../services/mailServer');

const sendMail = async (req, res) => {
    try {
        const { name, email, assunto, messagem, subject } = req.body;

            console.log(name)
        
        const body = `
        Nome: ${name}
        Email: ${email}
        Assunto: ${assunto}
        Mensagem: ${messagem}`

        await mailServer({
            destinationUser: process.env.CLIENT_EMAIL,
            subjectText: subject,
            textOption: body
        })

        res.status(200).send('Email enviado')

    } catch (error) {
        res.status(500).send('Erro no envio, tente novamente')
        console.log(error)

    }
}

module.exports = sendMail;