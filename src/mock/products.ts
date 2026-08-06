import hpLaptop from "../assets/images/products/hp-laptop.jpg";
import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    sku: "HP-15-I5",

    nombre: "Laptop HP 15.6 Intel Core i5",

    marca: "HP",

    categoria: "Laptops",

    descripcion: "Laptop HP para oficina y estudio.",

    imagen: hpLaptop,

    proveedor: "CT Internacional",

    precioProveedor: 12000,

    porcentajeGanancia: 20,

    precioVenta: 14400,

    existencia: 5,

    especificaciones: {
      procesador: "Intel Core i5",
      memoriaRAM: "16 GB",
      almacenamiento: "512 GB SSD",
      pantalla: '15.6"',
      sistemaOperativo: "Windows 11"
    }
  }
];