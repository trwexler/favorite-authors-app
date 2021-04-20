const Author = require('../models/author.model');    
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
         
module.exports = {

createAuthor: (request, response) => {
    const { firstName, lastName } = request.body;
    Author.create({
        firstName,
        lastName
    })
        .then(newAuthor =>{ 
            response.json(newAuthor);
            console.log(newAuthor);
        })
        .catch(err =>{ 
            response.status(400).json(err);
            console.log("Problem in createAuthor");
        });
},

viewAllAuthors : (request, response) => {
    Author.find({})
        .then((allAuthors)=> {
            console.log(allAuthors);
            response.json(allAuthors);
            })
        .catch(err =>{
            response.status(400).json(err);
            console.log("Problem in viewAllAuthors");
        })
},

viewOneAuthor : (request, response) => {
    Author.findById(request.params.id)
        .then((viewOne)=> {
            console.log(viewOne);
            response.json(viewOne);
            })
        .catch(err =>{
            response.status(400).json(err);
            console.log("Problem in viewAllAuthors");
        })
},


updateAuthor : (request, response) => {
    Author.findByIdAndUpdate(request.params.id, request.body,
        {
        new: true, 
        runValidators:true,
    })
        .then((updatedAuthor)=> {
            console.log(updatedAuthor);
            response.json(updatedAuthor);
            })
        .catch(err =>{
            response.status(400).json(err);
            console.log("Problem in updateAuthor");
        })
},

deleteAuthor : (request, response) => {
    Author.findByIdAndDelete(request.params.id)
        .then((deletedAuthor)=> {
            console.log(deletedAuthor);
            response.json(deletedAuthor);
            })
        .catch(err =>{
            response.status(400).json(err);
            console.log("Problem in deletedAuthor");
        })
}}