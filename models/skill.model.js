const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const skillSchema = new Schema({
    name: String,
    description: String,
    value: {
        type: Number,
        min: 0,
        max: 10,
        default: 0,
    }
},{ versionKey: false });
 
const Skill = mongoose.model('Skill', skillSchema);
 
module.exports = {
    skillSchema,
    Skill,
};