const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/players", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`connection succesfull`);
}).catch((e) => {
    console.error(e);
})

module.exports = mongoose;