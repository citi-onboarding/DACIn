const keystone = require("keystone")

const { Types } = keystone.Field

const sobreDA = new keystone.List("sobreDa", {
    map : { name: "title" },
    nocreate: true,
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
    Image: {
        type: Types.CloudinaryImage,
        required: true,
        unique: true,
        initial: true,
        index: true
    },
    clientInformation: {
        type: Types.CloudinaryImage,Textarea,
        required: true,
        unique: true,
        initial: true,
        index: true
    }
})

sobreDA.register()