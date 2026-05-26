# 🔌 BrightVote Backend

<p>
  <img alt="Spring Boot" src="https://img.shields.io/badge/Spring%20Boot-3.5.4-6DB33F?style=flat-square&logo=springboot&logoColor=white" />
  <img alt="Java" src="https://img.shields.io/badge/Java-17-ED8B00?style=flat-square&logo=openjdk&logoColor=white" />
  <img alt="Database" src="https://img.shields.io/badge/Database-H2-2563EB?style=flat-square" />
  <img alt="Security" src="https://img.shields.io/badge/Security-JWT-0F172A?style=flat-square" />
</p>

Spring Boot API for authentication, voting, nominee management, dashboards, notifications, and results.

## 🧩 What It Contains

- 🔐 Admin/student authentication and JWT security
- 🧑‍🎓 Student signup, approval, and voting
- 🏆 Event, category, and nominee management
- 📊 Dashboard and voting progress APIs
- 🔔 Email notification services
- 📄 Results, analytics, PDF, CSV, and spreadsheet exports
- 🗄️ Local H2 database configuration

## 🚀 Run

From this folder:

```powershell
.\mvnw.cmd spring-boot:run
```

The API runs on `http://localhost:8080` by default.

## ✅ Test

```powershell
.\mvnw.cmd test
```

## 🗄️ Database

The default development database is H2:

```text
jdbc:h2:file:../data/testdb;DB_CLOSE_ON_EXIT=FALSE
```

The `../data` path is relative to this `backend/` folder. The H2 console is available at:

```text
http://localhost:8080/h2-console
```

Default local credentials:

- User: `sa`
- Password: `1234`

## 🔐 Environment Variables

Use `.env.example` as a reference. Spring Boot reads real environment variables from your shell or hosting platform; the example file is documentation, not a secret store.

| Variable | Purpose |
| --- | --- |
| `PORT` | Backend server port, default `8080` |
| `SPRING_DATASOURCE_URL` | Override the H2 or production database URL |
| `SPRING_DATASOURCE_USERNAME` | Database username |
| `SPRING_DATASOURCE_PASSWORD` | Database password |
| `APP_JWT_SECRET` | JWT signing secret |
| `SPRING_MAIL_HOST` | SMTP host |
| `SPRING_MAIL_PORT` | SMTP port |
| `SPRING_MAIL_USERNAME` | SMTP username |
| `SPRING_MAIL_PASSWORD` | SMTP password |
| `APP_MAIL_FROM_ADDRESS` | Sender email address |
| `APP_MAIL_FROM_NAME` | Sender display name |

Keep real secrets in environment variables, not in source files.

## 🗂️ Source Layout

```text
src/main/java/com/example/votingsystem/
|-- admin/
|-- dashboard/
|-- notification/
|-- nominee/
|-- results/
|-- student/
`-- voting/
```
