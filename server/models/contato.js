const keystone = require("keystone")

const { Types } = keystone.Field

const contato = new keystone.List("contato", {
    map: { name: "title" },
    unique: true,
    nodelete: true
})

contato.add({
    title: {
        type: Types.Text,
        value: "Contato",
        noedit: true
    },
    description: {
        type: Types.Textarea,
        required: true,
        unique: true,
        initial: true,
        index: true
    },
})

contato.register()