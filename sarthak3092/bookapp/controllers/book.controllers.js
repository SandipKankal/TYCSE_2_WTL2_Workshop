const Book = require("../models/book.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      // Create a Tutorial
      const book = new Book({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published || false
      });
    
      // Save Tutorial in the database
      Book.create(book, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        else res.send(data);
      });
};

// Retrieve all Books from the database (with condition).
exports.findAll = (req, res) => {
    const title = req.query.title;

    Book.getAll(title, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving books."
        });
      else res.send(data);
    });
};

// Find a single Book with a id
exports.findOne = (req, res) => {
    Book.findById(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Book with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Book with id " + req.params.id
            });
          }
        } else res.send(data);
      });
};

//1Update a Book identified by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const id = req.params.id;

  const book = new Book({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false
  });

  Book.updateById(id, book, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Book with id ${id}.`
        });
      } else {
        res.status(500).send({
          message: "Error updating Book with id " + id
        });
      }
    } else res.send(data);
  });
};

// Delete a Book with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Book.remove(id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Book with id ${id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Book with id " + id
        });
      }
    } else res.send({ message: `Book was deleted successfully!` });
  });
};


// Delete all Books from the database.
exports.deleteAll = (req, res) => {
    Book.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Book with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Tutorial with id " + req.params.id
            });
          }
        } else res.send({ message: `Book was deleted successfully!` });
      });
    
};