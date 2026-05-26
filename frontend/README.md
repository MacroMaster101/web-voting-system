# 🎨 BrightVote Frontend

<p>
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=0F172A" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img alt="Router" src="https://img.shields.io/badge/React%20Router-7-CA4245?style=flat-square&logo=reactrouter&logoColor=white" />
  <img alt="Charts" src="https://img.shields.io/badge/Recharts-Analytics-22C55E?style=flat-square" />
</p>

Single React/Vite application for the full voting system UI.

## 🧩 Modules

All former frontend apps now live under one app:

```text
src/modules/
|-- admin/
|-- dashboard/
|-- nominee/
|-- notifications/
|-- results/
`-- voting/
```

## 🚀 Run

From this folder:

```powershell
npm install
npm run dev
```

The app runs on `http://localhost:5173`.

## ✅ Build And Lint

```powershell
npm run lint
npm run build
```

## 🔐 Environment

Copy `.env.example` to `.env` if you need to change frontend defaults.

```text
VITE_API_BASE=http://localhost:8080
VITE_API_URL=http://localhost:8080
VITE_PUBLIC_HOME=/
VITE_ADMIN_DASHBOARD_URL=/admin
VITE_VOTING_URL=http://localhost:5173
VITE_VOTES_PATH=/api/vote
VITE_REVIEW_BEFORE_SUBMIT=0
```

## 🧭 Main Routes

| Route | Screen |
| --- | --- |
| `/` | Public landing page |
| `/events` | Public event list |
| `/login` | Login and student signup |
| `/voting` | Student voting portal |
| `/admin` | Admin dashboard |
| `/admin/nominees` | Event, category, and nominee management |
| `/admin/notifications` | Notification center |
| `/admin/dashboard` | Voting progress dashboard |
| `/admin/results` | Results and reports |
| `/admin/results/analytics` | Analytics and exports |

## 🧼 Notes

Generated folders such as `node_modules/` and `dist/` are ignored and should not be committed.
