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

/* Update a Book identified by the id in the request
exports.update = (req, res) => {

};*/

// Delete a Book with the specified id in the request
exports.delete = (req, res) => {
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

/* Delete all Books from the database.
exports.deleteAll = (req, res) => {
};*/

/*
// Update a Book identified by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Book.updateById(
    req.params.id,
    new Book(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Book with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Book with id " + req.params.id
          });
        }
      } else res.send({ message: "Book was updated successfully!" });
    }
  );
};*/

// Delete all Books from the database
exports.deleteAll = (req, res) => {
  Book.removeAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while deleting all books."
      });
    } else res.send({ message: "All books were deleted successfully!" });
  });
};

/*
// Update a Book identified by the id in the request
exports.update = (req, res) => {
  const bookId = req.params.id;
  const updatedBookData = req.body;

  if (!updatedBookData || Object.keys(updatedBookData).length === 0) {
    return res.status(400).json({ message: "Content can not be empty!" });
  }

  Book.updateById(bookId, updatedBookData, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        return res.status(404).json({ message: `Not found Book with id ${bookId}.` });
      } else {
        return res.status(500).json({ message: `Error updating Book with id ${bookId}.` });
      }
    } else {
      return res.json({ message: "Book was updated successfully!" });
    }
  });
};*/
