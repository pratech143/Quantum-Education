# Admin Panel

## Setup

### Prerequisites
- Node.js 18+
- PostgreSQL database

### 1. Environment Variables

Copy `.env.example` to `.env` in the `Backend/` directory and fill in:

```
DATABASE_URL=postgresql://user:password@localhost:5432/consultancy?schema=public
ADMIN_JWT_SECRET=generate-a-random-string-at-least-32-characters
```

### 2. Database Migration

```bash
cd Backend
npx prisma migrate dev --name add_admin_users
```

### 3. Generate Prisma Client

```bash
npx prisma generate
```

### 4. Seed Superadmin

```bash
npm run seed:admin
```

### 5. Start Development

```bash
# Backend
cd Backend && npm run dev

# Frontend (separate terminal)
cd Frontend && npm run dev
```

### 6. Access Admin Panel

Open `http://localhost:5173/admin/login`

## Default Credentials

| Field    | Value        |
|----------|-------------|
| Email    | admin@site.com |
| Password | Admin@123   |

**You will be prompted to change the password on first login.**

## Role Permissions

| Action                    | Super Admin | Admin |
|--------------------------|:-----------:|:-----:|
| View dashboard           | Yes         | Yes   |
| Update own profile       | Yes         | Yes   |
| Change own password      | Yes         | Yes   |
| View admin list          | Yes         | No    |
| Create new admin         | Yes         | No    |
| Edit other admins        | Yes         | No    |
| Reset other's password   | Yes         | No    |
| Deactivate admin         | Yes         | No    |

## API Endpoints

| Method | Path                           | Auth     | Access       |
|--------|-------------------------------|----------|-------------|
| POST   | /api/admin/auth/login         | Public   | Rate limited |
| POST   | /api/admin/auth/logout        | Public   | -            |
| GET    | /api/admin/auth/me            | Required | Any admin    |
| GET    | /api/admin/stats              | Required | Any admin    |
| GET    | /api/admin/admins             | Required | Superadmin   |
| POST   | /api/admin/admins             | Required | Superadmin   |
| PUT    | /api/admin/admins/:id         | Required | Superadmin   |
| DELETE | /api/admin/admins/:id         | Required | Superadmin   |
| PUT    | /api/admin/admins/:id/password| Required | Superadmin   |
| PUT    | /api/admin/profile            | Required | Any admin    |
| PUT    | /api/admin/profile/password   | Required | Any admin    |
