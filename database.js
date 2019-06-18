const mongoose = require('mongoose');

const initDB = () => {

    mongoose.connect(
        'mongodb+srv://mongo-user-1:pZm5qV8XNvbTMLmi@cluster0-jqbah.mongodb.net/test?retryWrites=true&w=majority',
        { useNewUrlParser: true }
    );

    mongoose.connection.once('open', () => {
        console.log('connected to database');
    });

}

module.exports = initDB;
