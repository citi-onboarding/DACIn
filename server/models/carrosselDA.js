const keystone = require("keystone")

const { Types } = keystone.Field

const carrosselDA = new keystone.List("carrosselDA", {
    map : { name: "key" },
})

carrosselDA.add({
    key: {
        type: Types.Text,
        value: 'carrossel',
        noedit: true
    },

    Image: {
        type: Types.CloudinaryImage,
        required: true,
        unique: false,
        initial: true,
        index: true
    }
})
carrosselDA.register()