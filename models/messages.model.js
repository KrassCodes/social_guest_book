const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const messagesSchema = new Schema({
    sender: { type: String, required: true },
    receiver: { type: String, required: true }
});
const Messages = mongoose.model('message',messagesSchema);
module.exports = Messages;



