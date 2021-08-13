const AuthorController = require('../controller/authors.controller')

module.exports = app => {
  app.get("/api/authors", AuthorController.getAllAuthors)
  app.post("/api/authors", AuthorController.addNewAuthor)
  app.delete("/api/authors/delete/:id", AuthorController.deleteExistingAuthor)
  app.put("/api/authors/edit/:id", AuthorController.updateExistingAuthor)
}