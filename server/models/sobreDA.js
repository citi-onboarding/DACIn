const keystone = require("keystone")

const { Types } = keystone.Field

const sobreDA = new keystone.List("sobreDA", {
    map : { name: "title" },
    nodelete: true,
    unique: true
})

sobreDA.add({
    title: {
        type: Types.Text,
        value: "Sobre o DA",
        noedit: true
    },
    text: {
        type: Types.Textarea,
        required: true,
        unique: true,
        initial: true,
        index: true
    },
    
})

sobreDA.register()