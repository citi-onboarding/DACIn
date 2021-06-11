const keystone = require("keystone")

const { Types } = keystone.Field

const depoimentos = new keystone.List("depoimentos", {
    map : { name: "title" },
})

depoimentos.add({
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
})
depoimentos.register()