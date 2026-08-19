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

router.get("/:id", async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: req.params.id,
      },
      include: {
        category: true,
        brand: true,
        specifications: true,
      },
    });

    if (!product) {
      res.status(404).json({
        success: false,
        message: "Producto no encontrado.",
      });

      return;
    }

    res.json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("Error obteniendo producto:", error);

    res.status(500).json({
      success: false,
      message: "No se pudo obtener el producto.",
    });
  }
});

export default router;