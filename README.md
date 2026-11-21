# JiniL

JiniL (Justified Intellectuals Network Inside Logic) is a web application built with React and Vite, with a PHP API backend.

## Technology

- React 18
- Vite 5
- React Router
- PHP API
- MySQL / MariaDB

## Local development

### Requirements

- Node.js and npm
- PHP-enabled local web server
- MySQL or MariaDB

### Frontend setup

1. Install dependencies:

       npm install

2. Copy the environment template:

       cp .env.example .env

3. Set `VITE_API` in `.env` to the URL of the local PHP API directory. The value must be available to the Vite client, so do not put passwords, private tokens, or other secrets in this variable.

4. Start the Vite development server:

       npm run dev

5. Create a production build:

       npm run build

6. Run the linter:

       npm run lint

## Backend

The PHP API is in `public/api/`. Configure the database connection in the server-side configuration for your local environment. Never commit real database credentials.

## Environment variables

- `VITE_API`: base URL used by the frontend during local development.

Vite exposes variables prefixed with `VITE_` to browser-side code. Treat them as public configuration, not secrets.

## Security notes

- Keep local `.env` files out of Git.
- Use server-side environment/configuration for database credentials and signing secrets.
- Replace legacy password hashing and review SQL queries for parameterized statements before deploying the API publicly.

---

Built by [Mobashshirul Karim](https://github.com/masterweb801).
