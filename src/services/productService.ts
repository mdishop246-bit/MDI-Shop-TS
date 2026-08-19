import type { Product } from "../types/product";

const API_URL = "http://localhost:3001/api";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("No se pudieron obtener los productos.");
  }

  const data: {
    success: boolean;
    products: Product[];
  } = await response.json();

  if (!data.success) {
    throw new Error("La API no pudo obtener los productos.");
  }

  return data.products;
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
    product?: Product;
  } = await response.json();

  return data.product;
}