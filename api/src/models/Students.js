const { Schema, model } = require("mongoose");

const studentsSchema = Schema({
    name: {type: String, required: true},
    lastname: {
        type: String,
        required: true
    },
    birthdate: {
        type: String,
        required: true
    },
    carrera: {
        type: String,
        required: true,
    },
    average:{
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model("Student", studentsSchema);