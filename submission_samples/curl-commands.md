# cURL commands for the IBM assignment

Run the server first (`npm start`). These are commands to run and capture; paste the actual output from your terminal into the assignment. Requests that change state share the server's in-memory data, so run them in order without restarting the server.

## Task 1 — githubrepo
Replace `YOUR_USERNAME/expressBookReviews` with the real fork name. This summary shows whether GitHub marks the repository as a fork and identifies its parent/source:

```bash
curl -s https://api.github.com/repos/YOUR_USERNAME/expressBookReviews
```

To reduce the output if `jq` is installed:

```bash
curl -s https://api.github.com/repos/YOUR_USERNAME/expressBookReviews | jq '{full_name, fork, parent: .parent.full_name, source: .source.full_name}'
```

## Task 2 — getallbooks

```bash
curl -s http://localhost:5000/
```

## Task 3 — getbooksbyISBN

```bash
curl -s http://localhost:5000/isbn/1
```

## Task 4 — getbooksbyauthor

```bash
curl -s "http://localhost:5000/author/Chinua%20Achebe"
```

## Task 5 — getbooksbytitle

```bash
curl -s "http://localhost:5000/title/Things%20Fall%20Apart"
```

## Task 6 — getbookreview (run before adding a review)

```bash
curl -s http://localhost:5000/review/1
```

## Task 7 — register

```bash
curl -s -X POST http://localhost:5000/register -H "Content-Type: application/json" -d '{"username":"sanchit_demo","password":"BookReview123!"}'
```

## Task 8 — login (save session cookie for protected review routes)

```bash
curl -s -c cookies.txt -b cookies.txt -X POST http://localhost:5000/customer/login -H "Content-Type: application/json" -d '{"username":"sanchit_demo","password":"BookReview123!"}'
```

## Task 9 — reviewadded

```bash
curl -s -c cookies.txt -b cookies.txt -X PUT http://localhost:5000/customer/auth/review/1 -H "Content-Type: application/json" -d '{"review":"A memorable and thought-provoking book."}'
```

## Task 10 — deletereview

```bash
curl -s -c cookies.txt -b cookies.txt -X DELETE http://localhost:5000/customer/auth/review/1
```

Note: If you re-run registration with the same username without restarting the server, the API correctly reports that the username already exists. Use a fresh username or restart the server before capturing a first-time registration response.
