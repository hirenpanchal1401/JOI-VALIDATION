# interview-management-system
An interview management system for our internal use.

# Pre-request
* [node(11.0+)](https://nodejs.org/en/)
* [npm(6.5+)](https://docs.npmjs.com/about-npm/)
* [postgres(11.1+)](https://www.postgresql.org/download/)

# How to run ?
 * 1. `npm i`
 * 2. Create `.env` file at root. Take reference from `.env.example`
 * 3. Create database for app (make sure postgres service is running).
 * 4. Run migration script `./migratIt.sh`
 * 5. `npm run-script start-dev` to run app in development.
 * 6. `npm start` to run app in production.


