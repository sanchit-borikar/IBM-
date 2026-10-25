# Assignment answer reference — Express Book Reviews

This file is a **reference based on the repository source code**, not a record of commands executed against a running server. Do not present the sample responses as captured runtime output unless your own run returns them.

## Question 1 — githubrepo (fork evidence)

The repository `sanchit-borikar/IBM-` is not a fork. After using GitHub's Fork button on the official IBM source, run:

```bash
curl -s https://api.github.com/repos/YOUR-USERNAME/YOUR-FORK-NAME
```

The JSON must report `"fork": true`, and `parent.full_name` should identify the IBM source repository. Do not use fabricated fork metadata.

## Question 2 — getallbooks

Command:
```bash
curl -s http://localhost:5000/
```

Expected response:
```json
{"1":{"author":"Chinua Achebe","title":"Things Fall Apart","reviews":{}},"2":{"author":"Hans Christian Andersen","title":"Fairy tales","reviews":{}},"3":{"author":"Dante Alighieri","title":"The Divine Comedy","reviews":{}},"4":{"author":"Unknown","title":"The Epic Of Gilgamesh","reviews":{}},"5":{"author":"Unknown","title":"The Book Of Job","reviews":{}},"6":{"author":"Unknown","title":"One Thousand and One Nights","reviews":{}},"7":{"author":"Unknown","title":"Njál's Saga","reviews":{}},"8":{"author":"Jane Austen","title":"Pride and Prejudice","reviews":{}},"9":{"author":"Honoré de Balzac","title":"Le Père Goriot","reviews":{}},"10":{"author":"Samuel Beckett","title":"Molloy, Malone Dies, The Unnamable, the trilogy","reviews":{}}}
```

## Question 3 — getbooksbyISBN

Command:
```bash
curl -s http://localhost:5000/isbn/1
```

Expected response:
```json
{"1":{"author":"Chinua Achebe","title":"Things Fall Apart","reviews":{}}}
```

## Question 4 — getbooksbyauthor

Command:
```bash
curl -s "http://localhost:5000/author/Chinua%20Achebe"
```

Expected response:
```json
{"1":{"author":"Chinua Achebe","title":"Things Fall Apart","reviews":{}}}
```

## Question 5 — getbooksbytitle

Command:
```bash
curl -s "http://localhost:5000/title/Things%20Fall%20Apart"
```

Expected response:
```json
{"1":{"author":"Chinua Achebe","title":"Things Fall Apart","reviews":{}}}
```

## Question 6 — getbookreview

Run before adding a review.

Command:
```bash
curl -s http://localhost:5000/review/1
```

Expected response:
```json
{}
```

## Question 7 — register

Run once per server session for the username used here.

Command:
```bash
curl -s -X POST http://localhost:5000/register -H "Content-Type: application/json" -d '{"username":"sanchit_demo","password":"BookReview123!"}'
```

Expected response:
```json
{"message":"User successfully registered."}
```

## Question 8 — login

Command:
```bash
curl -s -c cookies.txt -b cookies.txt -X POST http://localhost:5000/customer/login -H "Content-Type: application/json" -d '{"username":"sanchit_demo","password":"BookReview123!"}'
```

The response has a dynamically generated `accessToken`. Include the actual token from the server response; there is no fixed token to copy.

## Question 9 — reviewadded

Run after successful login without restarting the server.

Command:
```bash
curl -s -c cookies.txt -b cookies.txt -X PUT http://localhost:5000/customer/auth/review/1 -H "Content-Type: application/json" -d '{"review":"A memorable and thought-provoking book."}'
```

Expected response:
```json
{"message":"Review added or updated successfully.","reviews":{"sanchit_demo":"A memorable and thought-provoking book."}}
```

## Question 10 — deletereview

Run after adding the review in Question 9.

Command:
```bash
curl -s -c cookies.txt -b cookies.txt -X DELETE http://localhost:5000/customer/auth/review/1
```

Expected response:
```json
{"message":"Review deleted successfully.","reviews":{}}
```

## Question 11 — general.js

Current public file URL:
https://github.com/sanchit-borikar/IBM-/blob/main/general.js

This root-level file implements Axios + async/await retrieval calls for all books, ISBN, author, title, and review.
