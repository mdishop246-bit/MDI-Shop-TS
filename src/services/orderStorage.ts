import type { Order } from "../types/order";

const ORDERS_STORAGE_KEY = "mdi_shop_orders";

export function saveOrder(order: Order): void {
  const existingOrders = getOrders();

  const updatedOrders = [...existingOrders, order];

  localStorage.setItem(
    ORDERS_STORAGE_KEY,
    JSON.stringify(updatedOrders)
  );
}

export function getOrders(): Order[] {
  const storedOrders = localStorage.getItem(
    ORDERS_STORAGE_KEY
  );

  if (!storedOrders) {
    return [];
  }

  return JSON.parse(storedOrders) as Order[];
}

export function getOrderById(
  orderId: string
): Order | undefined {
  const orders = getOrders();

  return orders.find((order) => order.id === orderId);
}