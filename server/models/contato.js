const keystone = require("keystone")

const { Types } = keystone.Field

const contato = new keystone.List("contato", {
    map: { name: "title" },
    unique: true,
    nocreate: true,
    nodelete: true
})

contato.add({
    title: {
        type: Types.Text,
        value: "contato",
        noedit: true
    },
    description: {
        type: Types.textarea,
        required: true,
        unique: true,
        initial: true,
        index: true
    },
})

redesSociais.register()