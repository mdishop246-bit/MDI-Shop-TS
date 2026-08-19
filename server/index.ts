import express from "express";
import { prisma } from "../src/server/prisma";

const app = express();

const PORT = 3001;

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "MDI Shop API funcionando correctamente",
  });
});

app.get("/api/db-test", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.json({
      success: true,
      message: "Conexión con PostgreSQL funcionando correctamente",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "No se pudo conectar con PostgreSQL",
    });
  }
});

app.listen(PORT, () => {
  console.log(
    `MDI Shop API ejecutándose en http://localhost:${PORT}`
  );
});