const AuthorController = require('../controllers/author.controller');


module.exports = function(app){
    app.get('/api', AuthorController.viewAllAuthors);
    app.post('/api/author', AuthorController.createAuthor);
    app.get('/api/author/:id', AuthorController.viewOneAuthor);
    app.put('/api/author/:id', AuthorController.updateAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);
}

