const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { skillSchema } = require('./skill.model');
const { talentSchema } = require('./talent.model');
 
const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    fullname: String,
    login: String,
    img: Buffer,
    lvl: {
        type: Number,
        default: 1,
    },
    birthday: Date,
    skills: [skillSchema],
    talents: [talentSchema],
    password: String,
    characteristics: {
        strength: {
            type: Number,
            default: 8
          },
          dexterity: {
            type: Number,
            default: 8
          },
          vitality: {
            type: Number,
            default: 8
          },
          intelligence: {
            type: Number,
            default: 8
          },
          mind: {
            type: Number,
            default: 8
          },
          charisma: {
            type: Number,
            default: 8
          },
          luck: {
            type: Number,
            default: 8
        }
    }
},{ versionKey: false });
 
const User = mongoose.model('User', userSchema);
 
module.exports = User;