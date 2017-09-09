var mongoose = require('mongoose');

var appDataSchema = new mongoose.Schema({
    title: { type: String, default: 'Name', lowercase: true },
    type: { type: String, unique: true, dropDups: true },
    message: { type: String, default: 'Name', lowercase: true },
    imageUrl: { type: String, unique: true, dropDups: true },
    package: { type: String, unique: true, dropDups: true }
});
module.exports = mongoose.model('appData', appDataSchema);



