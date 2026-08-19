import type { Product } from "../types/product";

const API_URL = "http://localhost:3001/api";

interface ApiProduct {
  id: string;
  sku: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  precioProveedor: string;
  porcentajeGanancia: string;
  precioVenta: string;
  existencia: number;
  proveedor: string;

  category?: {
    id: string;
    nombre: string;
  };

  brand?: {
    id: string;
    nombre: string;
  };

  specifications?: {
    procesador?: string | null;
    memoriaRAM?: string | null;
    almacenamiento?: string | null;
    tarjetaGrafica?: string | null;
    pantalla?: string | null;
    resolucion?: string | null;
    sistemaOperativo?: string | null;
    puertos?: string[] | null;
    peso?: string | null;
    color?: string | null;
  };
}

function mapProduct(product: ApiProduct): Product {
  return {
    id: product.id,
    sku: product.sku,
    nombre: product.nombre,
    marca: product.brand?.nombre ?? "",
    categoria: product.category?.nombre ?? "",
    descripcion: product.descripcion,
    imagen: product.imagen,
    proveedor: product.proveedor,
    precioProveedor: Number(product.precioProveedor),
    porcentajeGanancia: Number(product.porcentajeGanancia),
    precioVenta: Number(product.precioVenta),
    existencia: product.existencia,

    especificaciones: {
      procesador: product.specifications?.procesador ?? undefined,
      memoriaRAM: product.specifications?.memoriaRAM ?? undefined,
      almacenamiento: product.specifications?.almacenamiento ?? undefined,
      tarjetaGrafica: product.specifications?.tarjetaGrafica ?? undefined,
      pantalla: product.specifications?.pantalla ?? undefined,
      resolucion: product.specifications?.resolucion ?? undefined,
      sistemaOperativo:
        product.specifications?.sistemaOperativo ?? undefined,
      puertos: product.specifications?.puertos ?? undefined,
      peso: product.specifications?.peso ?? undefined,
      color: product.specifications?.color ?? undefined,
    },
  };
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("No se pudieron obtener los productos.");
  }

  const data: {
    success: boolean;
    products: ApiProduct[];
  } = await response.json();

  if (!data.success) {
    throw new Error("La API no pudo obtener los productos.");
  }

  return data.products.map(mapProduct);
}

export async function getProductById(
  id: string
): Promise<Product | undefined> {
  const response = await fetch(`${API_URL}/products/${id}`);

  if (response.status === 404) {
    return undefined;
  }

  if (!response.ok) {
    throw new Error("No se pudo obtener el producto.");
  }

  const data: {
    success: boolean;
    product?: ApiProduct;
  } = await response.json();

  if (!data.success || !data.product) {
    return undefined;
  }

  return mapProduct(data.product);
}