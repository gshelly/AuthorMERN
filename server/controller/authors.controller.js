const Author = require('../models/authors.models');

const getAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json({ allAuthors: allAuthors }))
        .catch(err => res.status(400).json({ errorMessage: err }))
}

const addNewAuthor = (req, res) => {
    Author.create({
        name: req.body.name,
    })
        .then(newAuthor => res.json({ newAuthor: newAuthor }))
        .catch(err => res.status(400).json(err))
}

const deleteExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then((deletedAuthor => res.json({ deletedAuthor: deletedAuthor })))
        .catch(err => res.status(400).json(err))
}

const updateExistingAuthor = ((req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id },
        req.body,
        { new: true }
    )
        .then((updatedAuthor) => res.json({ updatedAuthor: updatedAuthor }))
        .catch(err => res.status(400).json(err))
})

module.exports = {
    getAllAuthors,
    addNewAuthor,
    deleteExistingAuthor,
    updateExistingAuthor
}

