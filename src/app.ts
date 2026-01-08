import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import { limiter } from "./middleware/rateLimit.ts";

// routes
// import authRoutes from "./routes/auth.routes.ts";
// import accountRoutes from "./routes/account.routes.ts";

dotenv.config();

export const app = express();

// ---- Global Middleware ----
app.use(helmet());
app.use(express.json({ limit: "10kb" })); // prevent payload abuse
app.use(limiter);

// ---- Routes ----
// app.use("/api/auth", authRoutes);
// app.use("/api/account", accountRoutes);

// ---- Health Check ----
app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

// ---- Fallback ----
app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});
