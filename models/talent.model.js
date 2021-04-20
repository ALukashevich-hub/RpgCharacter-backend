const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const talentSchema = new Schema({
    name: String,
    description: String,
    img: Buffer,
},{ versionKey: false });
 
const Talent = mongoose.model('Talent', talentSchema);
 
module.exports = {
    talentSchema,
    Talent,
};