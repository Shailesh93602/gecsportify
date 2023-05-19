const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://shailesh93602:Shailesh200@sportifydb.jdckl7j.mongodb.net/players", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`connection succesfull`);
}).catch((e) => {
    console.error(e);
})

module.exports = mongoose;
