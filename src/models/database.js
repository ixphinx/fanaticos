const mongoose = require('mongoose');
const {Schema} = mongoose;

const Data = new Schema({
   /* Usuarios */
    user: String,
    password: String,
    username: String,
    userlastname: String,
    usercountry: String,
    userteam: String,
    useralias: String,
    userscore: Number,
    userexp: Number,
    newuser: Boolean,
   userbrzcup: Number,
   usersilvcup: Number,
   usergoldcup: Number,
    
    /* Trivia */
    main: String,
    type: String,
    code: Number,
    pregunta: String,
    ranswer: String,
    answer: String,
    answerid: String,
    rate: Number,
   img: String,
    
    
});

module.exports= mongoose.model('Data', Data);
