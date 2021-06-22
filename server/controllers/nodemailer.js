const keystone = require("keystone")
const doenv = require('dotenv');
const mailServer = require('../services/mailServer');

const sendMail = async (req, res, next) => {
    try {
        const { name, email, subject, mensagem } = req.body;

            console.log(name)
        
        const body = `
        Nome: ${name}
        Email: ${email}
        Mensagem: ${mensagem}`

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