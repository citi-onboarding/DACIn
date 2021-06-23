const keystone = require("keystone")
const { getNodemailer } = require("../controllers/nodemailer")

const { Types } = keystone.Field

const Nodemailer = new keystone.List("nodemailer", {
    map: { name: "key" },
    unique: true,
    nocreate: true,
    nodelete: true
})

Nodemailer.add({
    key: {
        type: Types.Text,
        value: "nodemailer",
        noedit: true
    },
    name: {
        type: Types.Text,
        required: true,
        unique: true,
        initial: true,
        index: true
    },
    email: {
        type: Types.Text,
        required: true,
        unique: true,
        initial: true,
        index: true
    },
    assuntos: {
        type: Types.Text,
        required: true,
        unique: true,
        initial: true,
        index: true
    },
    mensagem: {
        type: Types.Textarea,
        required: true,
        unique: true,
        initial: true,
        index: true
    },
})

Nodemailer.register()