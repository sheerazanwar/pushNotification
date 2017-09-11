var mongoose = require('mongoose');

var appDataSchema = new mongoose.Schema({
    title: { type: String, },
    type: { type: String},
    message: { type: String },
    imageUrl: { type: String, dropDups: true },
    package: { type: String, unique: true}
});
module.exports = mongoose.model('appData', appDataSchema);



