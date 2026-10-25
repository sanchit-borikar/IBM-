# IBM Express Book Reviews — final-project starter

This project includes the Express API and a root-level Axios client `general.js` for the async/await retrieval task. It uses the 10-book starter catalogue in `final_project/router/booksdb.js`.

## 1) Install and run

Requires Node.js 18+ and npm.

```bash
npm install
npm start
```

The server listens on `http://localhost:5000`. Keep this terminal open. Open a second terminal for the `curl` requests below.

## 2) Axios client (Task 11)

```bash
node general.js all
node general.js isbn 1
node general.js author "Chinua Achebe"
node general.js title "Things Fall Apart"
node general.js review 1
```

The implementation is at the repository root in `general.js`, and uses Axios with `async/await`.

## 3) Capture your own cURL command and output (Tasks 1–10)

Use the commands in `submission_samples/curl-commands.md`. Paste both the command and the actual output from your own run into each assignment field. Do not submit the placeholders as output. For registration/login/review changes, run requests in order and preserve the session cookie in `cookies.txt` as shown.

## 4) GitHub fork reminder

Fork the official IBM repository first, clone your fork, and copy these project files into it while preserving the fork's `.git` metadata. Commit and push the result. The official public repository currently appears as `ibm-developer-skills-network/expressBookReviews` (plural). Confirm the exact source repository linked by your course before forking, since the assignment text may use an older/singular name.

## Security note

This is a course demonstration. Users/passwords are held in memory, passwords are not hashed, and the development JWT/session secrets must be replaced before production use.
