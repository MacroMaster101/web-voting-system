<p align="center">
  <img src="./docs/logo.svg" alt="BrightVote logo" width="720" />
</p>

<h1 align="center">🗳️ BrightVote</h1>

<p align="center">
  <strong>A clean full-stack voting platform for campus awards, nominees, live dashboards, notifications, and published results.</strong>
</p>

<p align="center">
  <img alt="Spring Boot" src="https://img.shields.io/badge/Spring%20Boot-3.5.4-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=0F172A" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img alt="Java" src="https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />
</p>

## ✨ What This Project Does

- 🧑‍🎓 Student registration, login, and protected voting
- 🏆 Event, category, and nominee management
- 📊 Admin dashboards with voting progress and analytics
- 🔔 Notification workflows with SMTP configuration
- 📄 Results publishing, PDF/CSV/Excel-style reporting
- 🧹 Clean repo layout with one `backend/`, one `frontend/`, and one `data/` folder

## 🗂️ Project Layout

```text
.
|-- backend/        Spring Boot API, security, database, reports, mail
|-- frontend/       React/Vite app with all UI modules
|-- data/           Local H2 database files for development
|-- docs/           Project logo and README assets
`-- README.md
```

## ⚡ Quick Start

Prerequisites:

- ☕ Java 17
- 🟢 Node.js 18+
- 📦 npm

Run the backend and frontend in two terminals:

```powershell
cd backend
.\mvnw.cmd spring-boot:run
```

```powershell
cd frontend
npm install
npm run dev
```

Development URLs:

| App | URL |
| --- | --- |
| 🌐 Frontend | `http://localhost:5173` |
| 🔌 Backend API | `http://localhost:8080` |
| 🗄️ H2 console | `http://localhost:8080/h2-console` |

## ✅ Checks

Backend:

```powershell
cd backend
.\mvnw.cmd test
```

Frontend:

```powershell
cd frontend
npm run lint
npm run build
```

## 🔐 Environment

Backend configuration lives in `backend/src/main/resources/application.yml`. Use `backend/.env.example` as a reference for local or deployment environment variables.

Frontend configuration can be copied from `frontend/.env.example` when defaults need to change.

Important backend variables:

- `SPRING_DATASOURCE_URL`
- `SPRING_DATASOURCE_USERNAME`
- `SPRING_DATASOURCE_PASSWORD`
- `APP_JWT_SECRET`
- `SPRING_MAIL_USERNAME`
- `SPRING_MAIL_PASSWORD`
- `APP_MAIL_FROM_ADDRESS`
- `APP_MAIL_FROM_NAME`

## 🧼 Keep The Repo Clean

Do not commit generated folders such as `node_modules/`, `target/`, `frontend/dist/`, or local database files under `data/`.

Repository hygiene files:

- `.gitignore` keeps build output, local databases, IDE files, and secrets out of Git.
- `.editorconfig` keeps indentation and line endings consistent across editors.
- `.gitattributes` keeps Maven wrapper scripts with the right line endings.
