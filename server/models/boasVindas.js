const keystone = require('keystone');

const { Types } = keystone.Field;

const boasVindas = new keystone.List("boasVindas", {
    map: { name: "title" },
    unique: true,
    nodelete: true
})

boasVindas.add({
  title: {
    type: Types.Text,
    value: "Boas Vindas",
  },
  description: {
    type: Types.Textarea,
    required: true,
    unique: true,
    initial: true,
    index: true
  },
})

boasVindas.register();