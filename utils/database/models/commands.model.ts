import mongoose from 'mongoose';
const { Schema, model, models } = mongoose;

const CommandsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    subcommands: {
        type: Array,
        required: false,
    },
    options: {
        type: Array,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: false,
    },
});

const Commands = models.Commands || model("Commands", CommandsSchema);

export default Commands;