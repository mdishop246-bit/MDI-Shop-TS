import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL no está definida.");
}

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log("Insertando datos iniciales...");

  const hp = await prisma.brand.upsert({
    where: {
      nombre: "HP",
    },
    update: {},
    create: {
      nombre: "HP",
    },
  });

  const laptops = await prisma.category.upsert({
    where: {
      nombre: "Laptops",
    },
    update: {},
    create: {
      nombre: "Laptops",
    },
  });

  const product = await prisma.product.upsert({
    where: {
      sku: "MDI-HP-001",
    },
    update: {},
    create: {
      sku: "MDI-HP-001",
      nombre: "Laptop HP",
      descripcion: "Laptop HP para uso general.",
      imagen: "/images/products/hp-laptop.jpg",

      precioProveedor: 20000,
      porcentajeGanancia: 15,
      precioVenta: 23000,

      existencia: 0,
      proveedor: "CT Internacional",

      categoryId: laptops.id,
      brandId: hp.id,

      specifications: {
        create: {
          procesador: "Intel Core i5",
          memoriaRAM: "16 GB",
          almacenamiento: "512 GB SSD",
          pantalla: '15.6"',
          resolucion: "1920 x 1080",
          sistemaOperativo: "Windows 11",
        },
      },
    },
  });

  console.log(`Producto creado: ${product.nombre}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });