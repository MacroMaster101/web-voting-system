# 🗄️ Local Data

This folder is for local development database files.

The backend defaults to:

```text
jdbc:h2:file:../data/testdb;DB_CLOSE_ON_EXIT=FALSE
```

## 🧠 What Lives Here

- Generated H2 files like `testdb.mv.db`
- Local-only votes, users, nominees, events, and result data
- Temporary development state that should not be committed

The generated H2 files are ignored by Git. Keep this folder if you want to preserve your local development data between backend restarts.

## ♻️ Fresh Database

Stop the backend and remove generated `testdb.*` files. The backend will create them again on the next run.
