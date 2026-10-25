const express = require('express');
const books = require('./booksdb.js');
const { isValid, users } = require('./auth_users.js');
const publicUsers = express.Router();

// Register a new user. Usernames must be unique.
publicUsers.post('/register', (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }
  if (isValid(username)) {
    return res.status(409).json({ message: 'Username already exists.' });
  }
  users.push({ username, password });
  return res.status(201).json({ message: 'User successfully registered.' });
});

// Return the full book catalogue.
publicUsers.get('/', (req, res) => res.status(200).json(books));

// Return a book by numeric ID (used as ISBN in the course exercises).
publicUsers.get('/isbn/:isbn', (req, res) => {
  const book = books[req.params.isbn];
  if (!book) return res.status(404).json({ message: 'Book not found.' });
  return res.status(200).json({ [req.params.isbn]: book });
});

// Search authors case-insensitively; permits multi-word author names.
publicUsers.get('/author/:author', (req, res) => {
  const author = decodeURIComponent(req.params.author).toLocaleLowerCase();
  const result = Object.fromEntries(
    Object.entries(books).filter(([, book]) => book.author.toLocaleLowerCase().includes(author))
  );
  return res.status(200).json(result);
});

// Search titles case-insensitively.
publicUsers.get('/title/:title', (req, res) => {
  const title = decodeURIComponent(req.params.title).toLocaleLowerCase();
  const result = Object.fromEntries(
    Object.entries(books).filter(([, book]) => book.title.toLocaleLowerCase().includes(title))
  );
  return res.status(200).json(result);
});

// Return the current review map for a book.
publicUsers.get('/review/:isbn', (req, res) => {
  const book = books[req.params.isbn];
  if (!book) return res.status(404).json({ message: 'Book not found.' });
  return res.status(200).json(book.reviews);
});

module.exports.general = publicUsers;
