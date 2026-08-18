import express from "express";

const app = express();

const PORT = 3001;

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "MDI Shop API funcionando correctamente",
  });
});

app.listen(PORT, () => {
  console.log(`MDI Shop API ejecutándose en http://localhost:${PORT}`);
});