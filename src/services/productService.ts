import { products } from "../mock/products";
import type { Product } from "../types/product";

export function getProducts(): Product[] {
  return products;
}

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}