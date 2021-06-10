const keystone = require("keystone")

const { Types } = keystone.Field

const informationsDA = new keystone.List("informationsDA", {
    map : { name: "title" },
})

informationsDA.add({
    title: {
        type: Types.Text,
        index: true,
        initial: true,
        required: true,
        unique: true
    },
    text: {
        type: Types.Textarea,
        required: true,
        index: true,
        initial: true,
        unique: true
    },
    Image: {
        type: Types.CloudinaryImage,
        index: true,
        initial: true,
        required: true,
        unique: true
    }
})
informationsDA.register()