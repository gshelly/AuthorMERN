const mongoose = require('mongoose');

const  AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Title is required"],
        index: {
        unique: true,
        collation: { locale: 'en', strength: 2 }
        },
        minlength: [3, "Authors name must be 3 at least characters long"]
    }   
}, { timestamps: true });
module.exports = mongoose.model('Author', AuthorSchema);


// const mongoose = require('mongoose');
// const AuthorSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: [
//             true,
//             "Title is required"
//         ]
//     } 
// }, { timestamps: true });
// module.exports = mongoose.model('Author', AuthorSchema);

