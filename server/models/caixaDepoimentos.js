const keystone = require("keystone")

const { Types } = keystone.Field

const caixaDepoimentos = new keystone.List("caixaDepoimentos", {
    map : { name: "name" },
})

caixaDepoimentos.add({
    image: {
        type: Types.CloudinaryImage,
        index: true,
        initial: true,
        required: true,
        unique: false
    },
    text: {
        type: Types.Textarea,
        required: true,
        index: true,
        initial: true,
        unique: false
    },
    name: {
        type: Types.Text,
        index: true,
        initial: true,
        required: true,
        unique: false
    },

})
caixaDepoimentos.register()