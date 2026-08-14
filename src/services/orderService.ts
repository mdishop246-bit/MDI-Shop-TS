import type { Order, ShippingAddress } from "../types/order";
import type { Product } from "../types/product";

interface CreateOrderParams {
  products: {
    product: Product;
    quantity: number;
  }[];
  shippingAddress: ShippingAddress;
  total: number;
}

export function createOrder({
  products,
  shippingAddress,
  total,
}: CreateOrderParams): Order {
  const order: Order = {
    id: `MDI-${Date.now()}`,

    items: products.map((item) => ({
      product: item.product,
      quantity: item.quantity,
      price: item.product.precioVenta,
    })),

    shippingAddress,

    total,

    status: "pending",

    paymentStatus: "pending",

    createdAt: new Date().toISOString(),
  };

  return order;
}