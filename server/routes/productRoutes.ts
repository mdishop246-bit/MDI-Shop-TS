import { Router } from "express";
import { prisma } from "../../src/server/prisma";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
        brand: true,
        specifications: true,
      },
      orderBy: {
        nombre: "asc",
      },
    });

    res.json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("Error obteniendo productos:", error);

    res.status(500).json({
      success: false,
      message: "No se pudieron obtener los productos.",
    });
  }
});

export default router;