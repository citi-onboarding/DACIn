const keystone = require("keystone")

const { Types } = keystone.Field

const acoesArea = new keystone.List("acoesArea", {
    map : { name: "name" },
})

acoesArea.add({
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
    description: {
        type: Types.Text,
        index: true,
        initial: true,
        required: true,
        unique: false
    },

})

acoesArea.register() 