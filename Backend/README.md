# Backend

Node.js + TypeScript backend for the contact-us API.

## Stack

- Express
- TypeScript
- Zod
- Helmet
- CORS
- express-rate-limit

## Run locally

1. Copy `.env.example` to `.env`
2. Install dependencies with `npm install`
3. Start the dev server with `npm run dev`

Default base URL: `http://localhost:4000/api/v1`

## Endpoints

### `GET /health`

Health check endpoint.

### `POST /contact-requests`

Accepts:

```json
{
  "fullName": "Pratik Chapagain",
  "email": "pratik@example.com",
  "phoneNumber": "+977 9800000000",
  "preferredDestination": "Australia",
  "message": "I need guidance about universities and visa steps."
}
```

Successful response:

```json
{
  "success": true,
  "message": "Contact request submitted successfully.",
  "data": {
    "id": "uuid",
    "createdAt": "2026-04-10T00:00:00.000Z"
  },
  "requestId": "uuid"
}
```

## Architecture

- `modules/*/domain`: core business models
- `modules/*/application`: use cases and interfaces
- `modules/*/infrastructure`: technical implementations
- `modules/*/presentation`: controllers, routes, request schemas
- `shared/*`: config, middleware, errors, logging

The current contact repository is in-memory so we can keep the architecture clean now and swap in PostgreSQL or another database later without rewriting the API flow.
