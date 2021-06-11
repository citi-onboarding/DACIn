const keystone = require("keystone")

const { Types } = keystone.Field

const nossasAcoes = new keystone.List("nossasAcoes", {
    map : { name: "title" },
})

nossasAcoes.add({
    title: {
        type: Types.Text,
        index: true,
        initial: true,
        required: true,
        unique: true,
        noedit: true
    },
    text: {
        type: Types.Textarea,
        required: true,
        index: true,
        initial: true,
        unique: true
    },
    link: {
        type: Types.Url,
        required: true,
        unique: true,
        initial: true,
        index: true
      },
})

nossasAcoes.register() 