Here’s an updated and extended **README.md** that includes your provided content, plus clear documentation for the Docker setup, dependency on the Java backend (`nikhildhole/task-tracker-back-end.git`), and project functionality:

---

# Task Tracker (Next.js Frontend)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
It serves as the **frontend UI** for a simple **Task Tracker** application.

The Task Tracker allows users to:

* Create new tasks
* Edit existing tasks
* Delete tasks
* Mark tasks as complete

This frontend connects to a backend API built with **Java (Spring Boot)**, available at [nikhildhole/task-tracker-back-end.git](https://github.com/nikhildhole/task-tracker-back-end).
The backend uses **PostgreSQL** as the database.

---

## 🏗️ Project Structure

* **Frontend:** Next.js (TypeScript)
* **Backend:** Java Spring Boot ([nikhildhole/task-tracker-back-end.git](https://github.com/nikhildhole/task-tracker-back-end))
* **Database:** PostgreSQL
* **Containerization:** Docker Compose

---

## 🐳 Docker Setup

A sample Docker Compose service for the frontend is defined as:

```yaml
services:
  nextjs:
    build: .
    container_name: nextjs_app
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

### Run with Docker

Make sure the backend service (`task-tracker-back-end`) and PostgreSQL are up and running before starting this container.

```bash
docker-compose up --build
```

Once built, the app will be available at **[http://localhost:3000](http://localhost:3000)**

---

## 🚀 Getting Started (Local Development)

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

---

## 🔗 Backend Dependency

This Next.js app depends on the following backend repository:
👉 [nikhildhole/task-tracker-back-end.git](https://github.com/nikhildhole/task-tracker-back-end)

### Backend Details

* **Tech Stack:** Java (Spring Boot)
* **Database:** PostgreSQL
* **API Endpoints:** Expose task-related operations (create, update, delete, complete)
* Make sure the backend server is running before launching this Next.js app.

Example backend URL (default):

```
http://localhost:8080/api/tasks
```

If your backend runs on a different port or host, update the API base URL in your frontend `.env` file.
